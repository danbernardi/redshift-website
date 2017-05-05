import React from 'react';
import Scene from './Scene';
import Hero from 'routes/Home/Hero';
import FooterHome from 'components/Footer/FooterHome';
import { connect } from 'react-redux';
import Rx from 'rxjs/Rx';
import { mapRange, isInRange } from 'utils/animation';
import { TweenMax } from 'gsap';
import { setHeaderTheme } from 'store/actions';

export class Showcase extends React.Component {
  constructor (props) {
    super(props);

    this.duration = 500;
    this.container = null;
    this.scrollObservable = null;
    this.isAnimating = false;
    this.lastScrollPosition = 0;

    //Adding white for header and footer
    this.colors = ['#FFFFFF'].concat(this.props.scenes.map((scene) => scene.color)).concat(['#FFFFFF']);
    this.children = this.buildChildren();
    this.scrollPoints = [];
    this.sceneMeta = [];
    this.timelineEnd = 0;
    this.lastScroll = window.performance.now();
    this.currentScene = 0;

    this.state = {
      animationProgress: 0
    };
  }

  componentDidMount () {
    this.createObservables(this.container);

    //Wait to get accurate height
    setTimeout(() => {
      this.sceneMeta = this.setSceneMeta();
      let sceneIndex = null;

      if (this.props.locationHistory.lastPath) {
        const pathId = this.props.locationHistory.lastPath.split('/');
        const id = pathId.pop();
        sceneIndex = this.children.map((child) => {
          return child.props.id || null;
        }).indexOf(id);

        if (sceneIndex && sceneIndex !== -1) {
          this.goToScene(sceneIndex, false);
        }
      }

      if (location.pathname === '/work' && !sceneIndex) {
        this.goToScene(1);
      }
    }, 300);
  }

  //TODO: move this logic to Home component and pass as children
  buildChildren () {
    const children = React.Children.toArray([
      this.header(),
      this.sections(),
      this.footer()
    ]);

    return children.map((child, index) => {
      return React.cloneElement(child, {
        animationProgress: 0,
        index,
        onDidMount: (el) => this.addScrollPoint(el, index)
      });
    });
  }

  header () {
    return (<Hero
      clickCallback={ () => {
        this.goToScene.call(this, 1);
      }
    }
    />);
  }

  sections () {
    return this.props.scenes.map((scene, index) => (
      <Scene
        key={ index }
        index={ index + 1 }
        { ...scene }
      />
    ));
  }

  footer () {
    return (
      <FooterHome classes="footer__tall" />
    );
  }

  /**
   * Creates a scroll observable and maps it to a timeline in state
   * @param  {Object} element A dom element
   */
  createObservables (element) {
    this.scrollObservable = Rx.Observable.fromEvent(element, 'scroll');

    //Subscribe to the devices scroll event
    this.scrollSubscription = this.scrollObservable.subscribe((scrollEvent) => {
      const now = window.performance.now();
      const timeDelta = now - this.lastScroll;
      this.lastScroll = now;

      // const scrollPosition = scrollEvent.srcElement.scrollTop;
      // const scrollDirection = getScrollDirection(this.lastScrollPosition, scrollPosition);
      // this.lastScrollPosition = scrollPosition;

      // if (!this.isAnimating) {
      //   this.isAnimating = true;
      //   const container = this.container;
      //   let nextSceneIndex = scrollDirection && scrollDirection === 'down' ? this.currentScene + 1 : this.currentScene - 1;

      //   if (!scrollDirection && !isInRange(nextSceneIndex, 0, this.sceneMeta.length - 1)) {
      //     nextSceneIndex = this.currentScene;
      //   }

      //   const nextScene = this.sceneMeta[nextSceneIndex].target;
      //   const nextScenePosition = nextScene.offsetTop + (nextScene.offsetHeight / 2);
      //   this.animateToScrollPosition(container, nextScenePosition);
      // }

      if (timeDelta >= 300) {
        // console.log('scrollStart');
      }

      if (this.scrollEndTimer) {
        clearTimeout(this.scrollEndTimer);
      }

      this.scrollEndTimer = setTimeout(() => {
        // console.log('scrollEnd');
        // this.onScrollEnd.bind(this);
      }, 150);

      const target = scrollEvent.target;
      const animationProgress = this.calculateAnimationProgress(target);

      this.setState({
        animationProgress
      });
    });
  }

  calculateAnimationProgress (target) {
    return mapRange(target.scrollTop, 0, target.scrollHeight - window.innerHeight, 0, 1);
  }

  addScrollPoint (element) {
    if (element && this.scrollPoints.indexOf(element) === -1) {
      this.scrollPoints.push({
        element
      });
    };
  }

  jumpToScrollPosition (container, toPosition) {
    container.scrollTop = toPosition;
  }

  animateToScrollPosition (container, toPosition, duration = 1.5) {
    this.isAnimating = true;
    if (this.scrollTween) {
      this.scrollTween.kill();
    }

    const scrollPosition = {
      x: container.scrollTop
    };

    this.scrollTween = TweenMax.to(
      scrollPosition,
      duration, {
        x: toPosition,
        onUpdate: () => {
          this.container.scrollTop = scrollPosition.x;
        },
        onComplete: () => {
          this.isAnimating = false;
        }
      }
    );
  }

  goToScene (index, animate = true) {
    if (!isInRange(index, 0, this.sceneMeta.length - 1)) {
      console.warn('Scene index out of range', index);
      return null;
    }

    const scene = this.sceneMeta[index];
    const position = index === 0 ? scene.top : scene.center;
    this.currentScene = index;

    if (animate) {
      this.animateToScrollPosition(this.container, position);
    } else {
      this.sceneWillUpdate(0, index);
      this.jumpToScrollPosition(this.container, position);
    }
  }

  //Creates the initial scenes with some convienient props surfaced
  setSceneMeta () {
    let currentTimePosition = 0;
    const scrollHeight = this.container.scrollHeight;

    const segments = this.scrollPoints.map((scene) => {
      const top = scene.element.offsetTop;
      const height = scene.element.offsetHeight;
      const center = top + (height / 2);
      const timelinePercentage = height / (scrollHeight - window.innerHeight);
      const low = currentTimePosition;
      const high = currentTimePosition + timelinePercentage;

      const segmentMeta = {
        target: scene.element,
        top,
        center,
        height,
        timelinePercentage,
        animationProgress: 0,
        bounds: {
          low,
          high
        }
      };

      // increment position
      currentTimePosition = high;
      return segmentMeta;
    });

    return segments;
  }

  sceneWillUpdate (currentScene, nextScene) {
    const { dispatch } = this.props;

    if (nextScene === 0 || nextScene === this.sceneMeta.length - 1) {
      dispatch(setHeaderTheme('pink'));
    } else {
      dispatch(setHeaderTheme('white'));
    }
  }

  calculateCurrentScene () {
    let i = 0;
    const childCount = this.sceneMeta.length;

    while (i < childCount) {
      const range = this.sceneMeta[i].bounds;
      if (isInRange(this.state.animationProgress, range.low, range.high)) {
        if (i !== this.currentScene) {
          this.sceneWillUpdate(this.currentScene, i);
        }

        return i;
      }
      i++;
    }
  }

  render () {
    let sceneBgColor = this.colors[this.currentScene];
    if (this.sceneMeta.length) {
      this.currentScene = this.calculateCurrentScene();
    }

    return (
      <section ref={ (element) => { this.container = element; } } className="showcase" style={ {
        backgroundColor: sceneBgColor || '#fff',
        transition: `background-color ${this.duration}ms ease-out`,
        width: '100%',
        height: window.innerHeight,
        position: 'fixed',
        overflowY: 'scroll',
        top: 0
      } }>

        { /* React.cloneElement(leadingScene, { clickCallback: () => {
            //do something with arrow click
          } }) */}

        {
          /* If the children have mounted, update the animation progress for each component */
          this.sceneMeta.length ? this.children.map((child, index) => {
            return React.cloneElement(child, {
              animationProgress: mapRange(this.state.animationProgress, this.sceneMeta[index].bounds.low, this.sceneMeta[index].bounds.high, 0, 1),
              index,
              onDidMount: (el) => this.addScrollPoint(el, index)
            });
          })

          /* We need to mount the children initially to get their height */
          : this.children
        }

        {/*
          <button
            style={ { zIndex: '50', position: 'fixed', bottom: 100, right: 20, background: 'grey', padding: 10, color: 'white' } }
            onClick={ () => this.goToScene(this.currentScene + 1) }>
            Next
          </button>

          <button
            style={ { zIndex: '50', position: 'fixed', bottom: 100, right: 100, background: 'grey', padding: 10, color: 'white' } }
            onClick={ () => this.goToScene(this.currentScene - 1) }>
            Previous
          </button>
        */}
      </section>
    );
  }
}

Showcase.propTypes = {
  scenes: React.PropTypes.array,
  dispatch: React.PropTypes.func,
  locationHistory: React.PropTypes.object
};

const injectStateProps = state => ({
  locationHistory: state.locationHistory
});

export default connect(injectStateProps)(Showcase);
