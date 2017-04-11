import React from 'react';
import Rx from 'rxjs/Rx';
import Scene from './Scene';
import { getScrollDirection, enableScroll, disableScroll } from 'utils/scrollJack';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
import mojs from 'mo-js';
import { mapRange } from 'utils/animation';
import * as browser from 'utils/browserTests';
import { getClosestNumber } from 'utils/closestNumber';
import Footer from 'components/Footer';
import { Link } from 'react-router';
import { scrollDocToZero } from 'utils/scrollTo';


import AnimationWrapper from 'components/AnimationWrapper';

export class Showcase extends React.Component {
  constructor (props) {
    super(props);

    this.scrollPoints = [];
    this.duration = 600;
    this.scrollObservable = null;
    this.scrollYPosition = null;
    this.scrollAnimationInProgress = false;
    this.container = null;
    this.state = { sceneColor: '#fff' };


    //animation
    this.animationProgress = 0;

  }

  componentDidMount () {
    enableScroll();

    if (this.container) {
      this.scrollObservable = Rx.Observable.fromEvent(window, 'scroll');
      this.scrollYPosition = window.pageYOffset;

      // If the page had been previously scrolled, resume where we left off
      if (this.props.bannerState.active) { this.scrollToIndex(this.props.bannerState.active); }

      //Subscribe to the devices scroll event
      this.scrollSubscription = this.scrollObservable.subscribe(() => {
        // if (this.props.modalState.open) {
        //   disableScroll();
        //   return;
        // }

        // if (this.scrollAnimationInProgress) {
        //   return;
        // } else {
        //   disableScroll();
        //   this.scrollToScene();
        // }
      });
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.modalState === this.props.modalState) {
      return;
    }

    if (nextProps.modalState.open) {
      disableScroll();
    } else if (nextProps.modalState.open === false) {
      enableScroll();
    }
  }

  componentWillUnmount () {
    this.scrollSubscription.unsubscribe();
    enableScroll();
  }

  // adds a scrollPoint element to this.scrollPoints
  addScrollPoint (element, id) {
    if (element && this.scrollPoints.indexOf(element) === -1) {
      this.scrollPoints.push({
        id,
        element
      });
    };
  }

  //determines direction of scroll and triggers animation
  scrollToScene () {
    disableScroll();
    this.scrollAnimationInProgress = true;
    const { bannerState } = this.props;

    const newYPosition = window.pageYOffset;
    const direction = getScrollDirection(this.scrollYPosition, newYPosition);
    if (direction) {
      const index = direction === 'down' ? bannerState.active + 1 : bannerState.active - 1;
      this.scrollToIndex(index);
    } else {
      this.scrollAnimationInProgress = false;
      enableScroll();
    }
  }

  // scrolls to the scrollPoint that matches passed index
  scrollToIndex (bannerIndex) {
    if (!this.scrollAnimationInProgress) { this.scrollAnimationInProgress = true; }

    const { dispatch, scenes } = this.props;

    const activeScene = scenes[bannerIndex - 1];
    const sceneColor = activeScene ? activeScene.color : '#fff';

    if (bannerIndex < 0 || bannerIndex >= this.scrollPoints.length) {
      this.scrollAnimationInProgress = false;
      return;
    };

    if (bannerIndex > 0) dispatch(actions.setHeaderTheme('white'));
    if (bannerIndex === 0 || bannerIndex === this.scrollPoints.length - 1) dispatch(actions.setHeaderTheme('pink'));

    dispatch(actions.setActiveBanner(bannerIndex, sceneColor));

    const target = this.scrollPoints[bannerIndex].element;
    const frameHeight = window.innerHeight;
    const targetCenter = target.offsetTop + (target.offsetHeight / 2);

    this.scrollToPosition(targetCenter - frameHeight / 2);
  }

  render () {
    const { scenes, leadingScene, bannerState } = this.props;
    let sceneBgColor = '#fff';
    const ap = this.state.animationProgress;


    if (ap >=20 && ap < 40) {
      sceneBgColor = scenes[0].color;
    }

    if (ap >=40 && ap < 60) {
      sceneBgColor = scenes[1].color;
    }

    if (ap >=60 && ap < 80) {
      sceneBgColor = scenes[2].color;
    }

    if (ap >=80 && ap < 95) {
      sceneBgColor = scenes[3].color;
    }

    if (ap >=95 && ap <= 100) {
      sceneBgColor = "#fff";
    }

    return (
      <section ref={ (element) => { this.container = element; } } className="showcase" style={ {
        backgroundColor: sceneBgColor || '#fff',
        transition: `background-color ${this.duration}ms ease-out`,
        width: '100%',
        height: '100%'
      } }>

        <AnimationWrapper onAnimationProgress={ (animationProgress) => {
          this.setState({
            animationProgress
          });
        } }>
          { React.cloneElement(leadingScene, { onDidMount: (el) => this.addScrollPoint(el, 'hero'), clickCallback: this.scrollToIndex.bind(this) }) }


          { scenes.map((scene, index) => (
            <Scene
              onDidMount={ (el) => this.addScrollPoint(el, scene.id) }
              key={ index }
              index={ index + 1 }
              { ...scene }
            />
          )) }


          <Footer classes="footer__tall" onDidMount={ (el) => this.addScrollPoint(el, 'footer') }>
            <div className="footer__center">
              <div className="row">
                <ul className="typ--bold">
                  <li className="typ--h1" onClick={ () => scrollDocToZero() }><Link className="typ--redshift" to="/about">About.</Link></li>
                  <li className="typ--h1" onClick={ () => scrollDocToZero() }><Link className="typ--redshift" to="/careers">Careers.</Link></li>
                  <li className="typ--h1"><a className="typ--redshift" href="http://weareredshift.tumblr.com/" target="_blank">Blog.</a></li>
                </ul>
              </div>
            </div>
          </Footer>
        </ AnimationWrapper>
      </section>
    );
  }
}

Showcase.propTypes = {
  leadingScene: React.PropTypes.node,
  scenes: React.PropTypes.array,
  bannerState: React.PropTypes.object,
  dispatch: React.PropTypes.func,
  modalState: React.PropTypes.object
};

const injectStateProps = state => ({
  bannerState: state.bannerState,
  locationHistory: state.locationHistory,
  modalState: state.modalState
});

export default connect(injectStateProps)(Showcase);
