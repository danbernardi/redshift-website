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
    this.state = {
      sceneColor: '#fff',
      animationProgress: 0
    };
  }

  componentDidMount () {
    enableScroll();
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
    enableScroll();
  }

  // adds a scrollPoint element to this.scrollPoints
  addScrollPoint (element, id) {
    if (element && this.scrollPoints.indexOf(element) === -1) {
      console.log('height: ', element)
      this.scrollPoints.push({
        id,
        element
      });
    };
  }

  sceneAnimationRange (multiplier, segments, timeLineLength = 100) {
    const segmentLength = timeLineLength / segments;

    if (multiplier === 0 ) {
      return {
        low: 0,
        high: segmentLength
      };
    }

    if (multiplier === segments ) {
      return {
        low: timeLineLength - segmentLength,
        high: 100
      };
    }

    return {
      low: multiplier * segmentLength - (segmentLength / 2),
      high: multiplier * segmentLength + (segmentLength / 2)
    };
  }

  isInRange (val, min, max) {
    return val >= min && val <= max;
  }

  render () {
    const { scenes, leadingScene } = this.props;
    let sceneBgColor = '#fff';
    const ap = this.state.animationProgress;

    let i = 1;
    const childCount = 6;

    while (i < childCount) {
      const range = this.sceneAnimationRange(i, childCount);

      if (this.isInRange(ap, range.low, range.high)) {
        sceneBgColor = scenes[i-1] ? scenes[i-1].color : '#fff';
      }

      i++;
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
          { React.cloneElement(leadingScene, { onDidMount: (el) => this.addScrollPoint(el, 'hero'), clickCallback: () => { /*do something with arrow click*/ } }) }

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
