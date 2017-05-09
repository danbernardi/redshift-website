import React from 'react';
import Scene from './Scene';
import Hero from 'routes/Home/Hero';
import FooterHome from 'components/Footer/FooterHome';
import { connect } from 'react-redux';
import Rx from 'rxjs/Rx';
import { mapRange, isInRange } from 'utils/animation';
import { TweenMax } from 'gsap';
import { setHeaderTheme } from 'store/actions';

const normalizeTouchEvent = function(event) {
    if (!event.touches) {
        event.touches = event.originalEvent.touches;
    }
    if (!event.pageX) {
        event.pageX = event.originalEvent.pageX;
    }
    if (!event.pageY) {
        event.pageY = event.originalEvent.pageY;
    }
};

const SUPPORT_TOUCH = 'ontouchstart' in window;
let TOUCH_START = null;
let LAST_TOUCH = null;
let TOUCH_END = null;
const THRESHOLD = 60;

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

    this.scrollStart = new Rx.Subject();
    this.scrollEnd = new Rx.Subject();

    this.state = {
      animationProgress: 0
    };
  }

  componentDidMount () {
    //Removes jitter on mobile and android issues
    this.container.addEventListener('touchmove', (event) => {
      event.stopPropagation();
    });

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

  /**
   * Creates a scroll observable and maps it to a timeline in state
   * @param  {Object} element A dom element
   */
  createObservables (element) {
    this.onResize();
    this.handleScroll(element);
    if (SUPPORT_TOUCH) {
      this.handleTouch(element);
    }
  }

  onResize () {
    this.resizeObservable = Rx.Observable.fromEvent(window, 'resize').throttle(() => {
      return Rx.Observable.timer(700);
    });

    this.scrollSubscription = this.resizeObservable.subscribe((resizeEvent) => {
      this.sceneMeta = this.setSceneMeta();
      this.goToScene(this.currentScene);
    });
  }

  //Called on desktop
  handleScroll (element) {
    this.scrollObservable = Rx.Observable.fromEvent(element, 'scroll');

    //Subscribe to the devices scroll event
    this.scrollSubscription = this.scrollObservable.subscribe((scrollEvent) => {
      const now = window.performance.now();
      const scrollDelta = now - this.lastScroll;
      this.lastScroll = now;

      if (scrollDelta > 50) {
        this.scrollStart.next({
          eventType: 'scrollStart',
          event: scrollEvent
        });
      }

      //Skip this on mobile
      if (!SUPPORT_TOUCH) {
        clearTimeout(this.scrollEndTimer);
        //Prevent fire of scrollStop when coming from animation
        if (!this.isAnimating) {
          this.scrollEndTimer = setTimeout(() => {
            this.goToScene(this.currentScene);
          }, 100);
        }
      }

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

  //For mobile
  handleTouch (element) {
    this.touchStartObservable = Rx.Observable.fromEvent(element, 'touchstart');
    this.touchMoveObservable = Rx.Observable.fromEvent(element, 'touchmove');
    this.touchEndObservable = Rx.Observable.fromEvent(element, 'touchend');

    this.touchMove = this.touchStartObservable.flatMap((touchStartEvent) => {

      normalizeTouchEvent(touchStartEvent);

      const startY = touchStartEvent.pageY;
      const scrollStart = element.scrollTop;

      return this.touchMoveObservable.map((touchMoveEvent) => {

        normalizeTouchEvent(touchMoveEvent);

        const currentY = touchMoveEvent.pageY;
        const deltaY = currentY - startY;
        return {
          origin: touchStartEvent.pageY,
          currentY: touchMoveEvent.pageY,
          deltaY,
          direction: deltaY > 0 ? 'up' : 'down',
          touchStartEvent,
          touchMoveEvent,
          scrollStart
        };
      }).takeUntil(this.touchEndObservable);
    });

    this.touchMoveSubscription = this.touchMove.subscribe(
      //Observer
      (touchEvent) => {
        element.scrollTop = touchEvent.scrollStart + (touchEvent.deltaY * -1);
      }
    );

    this.touchStartSubscription = this.touchStartObservable.subscribe((touchStartEvent) => {
      TOUCH_START = touchStartEvent;
    });

    this.touchMoveSubscription = this.touchMoveObservable.subscribe((touchMoveEvent) => {
      LAST_TOUCH = touchMoveEvent;
    });

    this.touchEndSubscription = this.touchEndObservable.subscribe((touchEndEvent) => {
      TOUCH_END = touchEndEvent;
      const start = TOUCH_START.touches[0].pageY;
      const end = LAST_TOUCH.touches[0].pageY;
      const delta = end - start;
      let direction = null;

      if (Math.abs(delta) > THRESHOLD) {
        direction = delta > 0 ? 'down' : 'up';
      }

      const go = direction === 'up' ? this.goToNextScene : this.goToPrevScene;
      go.call(this);
    });
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

  /**
   * Scrolls to a specifide position, which triggers the animation
   * @param  {Object} container  The wrapping container of the component
   * @param  {Number} toPosition Position to scroll to
   * @param  {Number} duration   Time to animate to next position
   */
  animateToScrollPosition (container, toPosition, duration = 1) {

    this.isAnimating = true;
    container.style.overflow = 'hidden';
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
          container.style.overflow = 'auto';
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
    let position = index === 0 ? scene.top : scene.center;
    position = index === this.sceneMeta.length - 1 ? position + scene.height : position;

    // const duration = SUPPORT_TOUCH ? 1 : Math.abs(this.container.scrollTop - position) * 2 / 1000;
    this.currentScene = index;

    if (animate) {
      this.animateToScrollPosition(this.container, position);
    } else {
      this.sceneWillUpdate(0, index);
      this.jumpToScrollPosition(this.container, position);
    }
  }

  /**
   * Animate to next scene
   */
  goToNextScene () {
    this.goToScene(this.currentScene + 1);
  }

  /**
   * Animate to previous scene
   */
  goToPrevScene () {
    this.goToScene(this.currentScene - 1);
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

  /**
   * Fires upon a scene change
   * @param  {Number} currentScene Index of current scene
   * @param  {Number} nextScene    Index of next scene
   */
  sceneWillUpdate (currentScene, nextScene) {
    const { dispatch } = this.props;

    if (nextScene === 0 || nextScene === this.sceneMeta.length - 1) {
      dispatch(setHeaderTheme('pink'));
    } else {
      dispatch(setHeaderTheme('white'));
    }
  }

  /**
   * Finds the current scene index based on scroll position.
   * Calls sceneWillUpdate upon a change.
   * @return {Number} The index of the current scene
   */
  calculateCurrentScene () {
    let i = 0;
    const childCount = this.sceneMeta.length;

    while (i < childCount) {
      const range = this.sceneMeta[i].bounds;
      if (isInRange(this.state.animationProgress, range.low, range.high)) {
        if (i !== this.currentScene) {
          this.sceneWillUpdate(this.currentScene, i);
          return i;
        }
        return i;
      }
      i++;
    }
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

  // Clone header and add props
  header () {
    return (<Hero
      clickCallback={ () => {
        this.goToScene.call(this, 1);
      }
    }
    />);
  }

  // Clone scenes and add props
  sections () {
    return this.props.scenes.map((scene, index) => (
      <Scene
        key={ index }
        index={ index + 1 }
        { ...scene }
      />
    ));
  }

  // Clone footer and add props
  footer () {
    return (
      <FooterHome classes="footer__tall" />
    );
  }

  render () {
    let sceneBgColor = this.colors[this.currentScene];
    if (this.sceneMeta.length) {
      this.currentScene = this.calculateCurrentScene();
    }

    return (
      <div>

        {/*<button
          style={ { zIndex: '50', position: 'fixed', bottom: 100, right: 20, background: 'grey', padding: 10, color: 'white' } }
          onClick={ () => this.goToNextScene() }>
          Next
        </button>

        <button
          style={ { zIndex: '50', position: 'fixed', bottom: 100, right: 100, background: 'grey', padding: 10, color: 'white' } }
          onClick={ () => this.goToPrevScene() }>
          Previous
        </button>
      */}

      <section ref={ (element) => { this.container = element; } } className="showcase" style={ {
        backgroundColor: sceneBgColor || '#fff',
        transition: `background-color ${this.duration}ms ease-out`,
        height: window.innerHeight,
        overflowY: SUPPORT_TOUCH ? 'hidden' : 'scroll'
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

      </section>
      </div>
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
