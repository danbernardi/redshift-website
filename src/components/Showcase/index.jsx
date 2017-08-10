import React from 'react';
import Scene from './Scene';
import Hero from './Hero';
import Archive from 'components/Archive';
import { connect } from 'react-redux';
// import { RxObservable } from 'rxjs/Rx';
import { mapRange, isInRange } from 'utils/animation';
import { TimelineLite, TweenMax, Power3 } from 'gsap';
import { setHeaderTheme } from 'store/actions';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import Loader from 'components/Loader';
import { enableScroll, disableScroll } from 'utils/scrollJack';

export class Showcase extends React.Component {
  constructor (props) {
    super(props);
    this.duration = 500;
    this.container = null;
    this.scrollObservable = null;
    this.isAnimating = false;
    this.lastScrollPosition = 0;
    this.scrollAutoCompletion = false;

    //Adding white for header and footer
    this.colors = ['#FFFFFF'].concat(this.props.scenes.map((scene) => scene.color)).concat(['#FFFFFF']);

    this.children = this.buildChildren();
    this.scrollPoints = [];
    this.sceneMeta = [];
    this.lastScroll = window.performance.now();
    this.currentScene = 0;
    this.previousScene = 0;
    this.loadedSections = [];

    this.state = { animationProgress: 0 };
  }

  componentDidMount () {
    disableScroll();
  }

  componentDidUpdate (prevProps, prevState) {
    const { modalState } = this.props;

    if (modalState.open && !prevProps.modalState.open) {
      setTimeout(() => {
        this.wrapper.style.opacity = 0;
      }, 200);
    }

    if (!modalState.open && prevProps.modalState.open) {
      this.wrapper.style.opacity = 1;
    }

    if (!prevState.loaded && this.state.loaded) {
      this.container.style.overflowY = 'scroll';
      document.querySelector('.loader').style.display = 'none';

      this.createObservables(this.container);
      this.sceneMeta = this.setSceneMeta();
      this.timeline = this.createColorTransitionTimeline(this.wrapper);
      let sceneIndex = null;

      if (this.props.locationHistory.lastPath) {
        const pathId = this.props.locationHistory.lastPath.split('/');
        const id = pathId.pop();
        sceneIndex = this.children
          .map((child) => child.props.id || null)
          .indexOf(id);

        if (sceneIndex && sceneIndex !== -1) {
          this.goToScene(sceneIndex, false);
        }
      }

    // Not a scroll update, and page is loaded
    } else if (this.state.loaded && prevState.animationProgress === this.state.animationProgress) {
      const onWork = ['/', '/work'].includes(location.pathname);
      const { lastPath } = this.props.locationHistory;
      const fromStudy = lastPath && lastPath.includes('/work/');

      // Coming from caseStudy modal back to work
      if (onWork && fromStudy) {
        const sceneName = lastPath.split('/work/')[1];
        let sceneIndex = this.props.scenes.findIndex(scene => scene.id === sceneName);

        // If not among the main scenes, go to archive
        if (sceneIndex === -1) {
          sceneIndex = this.props.scenes.length; // Archive
        }

        this.goToScene(sceneIndex, false);
      }
    }
  }

  /**
   * Creates the event handlers and maps them to a timeline in state
   * @param  {Object} element A dom element
   */
  createObservables (element) {
    this.onResize();
    this.handleScroll(element);
  }

  /**
   * Creates event handlers for a resize event.
   */
  onResize () {
    this.resizeFunc = debounce(this.resizeSubscription.bind(this), 700);
    window.addEventListener('resize', this.resizeFunc);
  }

  /**
   * handleScroll creates the scroll event handlers.
   * @param  {Object} element The wrapping DOM node for the component
   */
  handleScroll (element) {
    //Subscribe to the devices scroll event
    element.addEventListener('scroll', this.scrollSubscription.bind(this));
  }

  /**
   * Given a dom element, this uses the scroll position to calculate a timeline value
   * between 0 and 1
   * @param  {Object} target DOM node
   * @return {Number}        Returns a value between 0 and 1
   */
  calculateAnimationProgress (target) {
    return mapRange(target.scrollTop, 0, target.scrollHeight - window.innerHeight, 0, 1);
  }

  /**
   * Updates the state of our app after a resize event, with new dom based calculations.
   */
  resizeSubscription () {
    this.sceneMeta = this.setSceneMeta();
    this.timeline = this.createColorTransitionTimeline(this.wrapper);
  }

  /**
   * srollSubscription creates the logic to link scrolling to the animation timeline progression.
   * @param {object} scrollEvent      The event returned when the showcase element is scrolled
   */
  scrollSubscription (scrollEvent) {
    const { modalState } = this.props;

    if (!modalState.open) {
      const target = scrollEvent.target;
      const animationProgress = this.calculateAnimationProgress(target);
      this.timeline.progress(animationProgress).pause();
      this.setState({ animationProgress });
    }
  };

  /**
   * Clears eventListeners when the component is destroyed
   */
  componentWillUnmount () {
    window.removeEventListener('resize', this.resizeFunc);
    if (this.container) {
      this.container.removeEventListener('scroll', this.scrollSubscription);
    }

    enableScroll();
  }

  /**
   * This takes the "scenes" or page sections and saves them to an array
   * @param {Object} element DOM node
   */
  addScrollPoint (element, index) {
    if (element && this.scrollPoints.indexOf(element) === -1) {
      this.scrollPoints[index] = { element };
    };
  }

   /**
   * Creates the initial scenes with some convienient props surfaced
   * @return {Array} An array of segment Objects
   */
  setSceneMeta () {
    let currentTimePosition = 0;
    const scrollHeight = this.container.scrollHeight;

    const segments = this.scrollPoints.map((scene, index) => {
      const top = scene.element.offsetTop;
      const height = scene.element.offsetHeight;

      const timelinePercentage = height / (scrollHeight - window.innerHeight); // divide by (scrollHeight - window.innerHeight) if there is no element after showcase
      const outsetTime = timelinePercentage * 0.2;
      let low = currentTimePosition - outsetTime;
      let high = currentTimePosition + timelinePercentage + outsetTime;

      if (index === this.scrollPoints.length - 1) {
        high = 1;
      }

      if (index === 0) {
        low = currentTimePosition;
      }

      //Get the center then multiply times the total scroll distance to get the scroll position
      const center = (((high - low) / 2) + low) * (scrollHeight - window.innerHeight);

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
      currentTimePosition = currentTimePosition + timelinePercentage;
      return segmentMeta;
    });

    return segments;
  }

  /**
   * Creates the gsap timeline that animates the background gradients
   * @param  {Object} target DOM element on which to change the background
   * @return {Object}        GSAP TimelineLite Object
   */
  createColorTransitionTimeline (target) {
    const tl = new TimelineLite();

    const colorGrad = {
      top: this.colors[0],
      bottom: this.colors[0]
    };

    this.sceneMeta.forEach((meta, index) => {
      const duration = (meta.bounds.high - meta.bounds.low) / 2;

      tl.to(colorGrad, duration, {
        top: this.colors[index],
        bottom: this.colors[index],
        onUpdate: this.setGradient.bind(this),
        onUpdateParams: [target, colorGrad],
        ease: Power3.easeOut
      });

      tl.to(colorGrad, duration, {
        top: this.colors[index],
        bottom: this.colors[index + 1] || '#FFFFFF',
        onUpdate: this.setGradient.bind(this),
        onUpdateParams: [target, colorGrad],
        ease: Power3.easeIn
      });
    });

    tl.progress(0);
    tl.pause();

    return tl;
  }

  /**
   * Sets the gradient property of a DOM element
   * @param {Object} element DOM node to target
   * @param {Object} colors  Keys of 'top' and 'bottom' with coresponding colors
   */
  setGradient (element, colors) {
    if (this.lastScrollPosition >= 0) {
      TweenMax.set(element, {
        background: `linear-gradient(to bottom, ${colors.top}, ${colors.bottom})`
      });
    }
  }

  /**
   * Fires upon a scene change
   * @param  {Number} currentScene Index of current scene
   * @param  {Number} nextScene    Index of next scene
   */
  sceneWillUpdate (currentScene, nextScene) {
    const { dispatch } = this.props;

    if (nextScene === 0 || nextScene === this.scrollPoints.length - 1) {
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
  /**
   * Compiles the children into a flat array structure and maps props to them
   * @return {Array} An array of child components
   */
  buildChildren () {
    const children = React.Children.toArray([
      this.header(),
      this.sections()
    ]);

    return children.map((child, index) => React.cloneElement(child,
      {
        animationProgress: 0,
        index,
        onDidMount: (el) => this.addScrollPoint(el, index)
      }
    ));
  }

  // Clone header and add props
  header () {
    return (<Hero scrollTrigger={ this.goToScene.bind(this) } />);
  }

  // Clone scenes and add props
  sections () {
    return this.props.scenes.map((scene, index) => (
      <Scene
        key={ index }
        index={ index + 1 }
        { ...scene }
        reportAsLoaded={ (id) => this.setAsLoaded(id) }
      />
    ));
  }

  /**
   * As opposed to animateToScrollPosition, this jumps directly to it.
   * @param  {Object} container  DOM node
   * @param  {Number} toPosition Position to scroll to
   */
  jumpToScrollPosition (container, toPosition) {
    container.scrollTop = toPosition;
  }

  /**
   * Scrolls to a specified position, which triggers the animation
   * @param  {Object} container  The wrapping container of the component
   * @param  {Number} toPosition Position to scroll to
   * @param  {Number} duration   Time to animate to next position
   */
  animateToScrollPosition (container, toPosition, duration = 0.5) {
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
          setTimeout(() => {
            this.isAnimating = false;
            container.style.overflow = 'auto';
          }, 100);
        }
      }
    );
  }

  /**
   * Utility funciton to animate or jump to a scene
   * @param  {Number}  index   The scene to move to
   * @param  {Boolean} animate Animate or jump to a scene.  Defaults to true (animate)
   */
  goToScene (index, animate = true) {
    if (!isInRange(index, 0, this.sceneMeta.length - 1)) {
      console.warn('Scene index out of range', index);
      return null;
    }

    const scene = this.sceneMeta[index];
    let position = scene.center;
    position = index === this.sceneMeta.length - 1 ? position + scene.height : position;

    this.currentScene = index;

    if (!this.isAnimating) {
      if (animate) {
        this.animateToScrollPosition(this.container, position);
      } else {
        this.sceneWillUpdate(0, index);
        this.jumpToScrollPosition(this.container, position);
      }
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

  setAsLoaded (section) {
    const { loaded } = this.state;

    if (this.loadedSections.indexOf(section) === -1) this.loadedSections.push(section);
    if (!loaded && this.loadedSections.length === this.children.length) {
      this.setState({ loaded: true });
    }
  }

  render () {
    const { modalState } = this.props;

    if (this.sceneMeta.length) this.currentScene = this.calculateCurrentScene();

    return (
      <div ref={ el => { this.wrapper = el; } } className="showcase__wrapper">
        <div
          ref={ (element) => { this.container = element; } }
          className="showcase"
          style={ { height: modalState.windowHeight, width: modalState.windowWidth } }
        >

          {
            /* If the children have mounted, create a placeholder for each component */
            this.children.map((child, index) => {
              return (
                <div className="scene scene__dummy" key={ index } />
              );
            })
          }

          <Archive reportAsLoaded={ () => this.setAsLoaded('archive') } onDidMount={ (el) => this.addScrollPoint(el, this.children.length) } />
        </div>
        <div className="showcase__content">
          {
            /* If the children have mounted, update the animation progress for each component */
            this.sceneMeta.length ? this.children.map((child, index) => React.cloneElement(child,
              {
                animationProgress: mapRange(this.state.animationProgress, this.sceneMeta[index].bounds.low, this.sceneMeta[index].bounds.high, 0, 1),
                index,
                onDidMount: (el) => this.addScrollPoint(el, index),
                currentScene: this.currentScene
              }
            ))
            /* We need to mount the children initially to get their height */
            : this.children
          }
        </div>
        <Loader />
      </div>
    );
  }
}

Showcase.propTypes = {
  scenes: PropTypes.array,
  dispatch: PropTypes.func,
  locationHistory: PropTypes.object,
  modalState: PropTypes.object
};

const injectStateProps = state => ({
  locationHistory: state.locationHistory,
  modalState: state.modalState
});

export default connect(injectStateProps)(Showcase);
