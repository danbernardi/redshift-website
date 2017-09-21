import React from 'react';
import GSAP from 'react-gsap-enhancer';
import { TimelineLite, TweenMax, Power2, Power3 } from 'gsap';
import { connect } from 'react-redux';
import { breakpointIsGreaterThan } from 'utils/responsiveHelpers';
import MorphSVGPlugin from 'vendor/gsap-plugins/MorphSVGPlugin';
import CustomEase from 'vendor/gsap-plugins/CustomEase';
import Watcher from 'components/Watcher';
import PropTypes from 'prop-types';

import './AboutHybrid.scss';

/**
 * The hybrid setion of the about page
 *
 * @param {Object} props
 * @param {Object} scrollContainer      Dimensions of the scrollContainer for the watcher in AboutHybrid
 * @param {Object} breakpoint           Checks browser width
 * @return {React.Component}
 */

export class AboutHybrid extends React.Component {
  componentDidMount () {
    this.timeline = this.addAnimation(this.createTimeline.bind(this));
  }

  drawLine (obj, line) {
    line.style.strokeDasharray = [obj.length, obj.pathLength].join(' ');
  };

  createLineTween (line, speed) {
    const pathObject = {
      length: 0,
      pathLength: line.getTotalLength()
    };

    return TweenMax
      .to(pathObject, speed, {
        length: pathObject.pathLength,
        onUpdate: this.drawLine,
        onUpdateParams: [pathObject, line],
        immediateRender: true,
        ease: Power2.easeOut
      }
    );
  };

  createTimeline (target) {
    const wrapper = target.target[0];
    const hybridPath = wrapper.querySelector('#hybridPath1');
    const hyPath = MorphSVGPlugin.pathDataToBezier(wrapper.querySelector('#hybridPath1'));
    const hyPath2 = MorphSVGPlugin.pathDataToBezier(wrapper.querySelector('#hybridPath2'));
    const tl = new TimelineLite();
    const baseDuration = 1;

    const hyText = [].slice.call(wrapper.querySelectorAll('.hyText'));
    const hyCircle = [].slice.call(wrapper.querySelectorAll('.hyCircle'));

    const customEase = [
      'M0,0 C0.083,0.294 0.272,0.80 1,0.80',
      'M0,0 C0.083,0.294 0.272,0.75 1,0.75',
      'M0,0 C0.083,0.294 0.272,0.70 1,0.70',
      'M0,0 C0.083,0.294 0.272,0.65 1,0.65'
    ];

    const customEase2 = [
      'M0,0 C0.083,0.294 0.272,0.81 1,0.81',
      'M0,0 C0.083,0.294 0.272,0.76 1,0.76',
      'M0,0 C0.083,0.294 0.272,0.715 1,0.715',
      'M0,0 C0.083,0.294 0.272,0.67 1,0.67'
    ];

    tl
      .add(this.createLineTween(hybridPath, baseDuration * 2), 'experiment')
      .staggerTo(hyText, 1, { opacity: 1, ease: Power3.easeIn }, 0.1, `experiment+=${baseDuration / 2}`);

    hyCircle.forEach((circle, index) => {
      tl
      .set(circle, { opacity: 1 }, `experiment+=${baseDuration / 2}`)
      .to(circle, baseDuration, {
        bezier: { values: hyPath, type: 'cubic' },
        ease: CustomEase.create('custom', customEase[index])
      },
      `experiment+=${baseDuration / 2}`);
    });

    hyText.forEach((text, index) => {
      tl.to(text, baseDuration, {
        bezier: { values: hyPath2, type: 'cubic' },
        ease: CustomEase.create('custom', customEase2[index])
      },
      `experiment+=${baseDuration / 2}`);
    });

    tl.pause();

    return tl;
  }

  watcherCallback = (watcher) => {
    if (watcher.isInViewport) { this.timeline.play(); }
  };

  render () {
    const { scrollContainer, breakpoint } = this.props;

    return (
      <section className="hero layout--relative layout--landscape" style={ { overflow: 'hidden' } }>
        <Watcher
          offset={ { top: '50rem', position: 'relative' } }
          autoStart={ false }
          stateChange={ this.watcherCallback }
          enterViewport={ this.watcherCallback }
          scrollContainer={ scrollContainer }
        />

        <div className="about__hybrid--container">
          <svg
            viewBox={ `${ breakpointIsGreaterThan('tabletLg', breakpoint.size) ? 0 : 450 } 0 1390 818` }
            preserveAspectRatio="xMaxYMax meet"
            className="about__hybrid--circle"
          >
            <g id="Hybrid" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path
                id="hybridPath1"
                className="aboutPath"
                d="M0,646 C250,-230.75 1452.15,58.74 1338,912"
              />
              <path
                id="hybridPath2"
                d="M-24,639.26 C234.55,-259.1 1477.46,37.58 1359,912"
              />
            </g>

            <circle id="hyCircle1" className="hyCircle" r="10" cx="0" cy="0" fill="#B141A5" />
            <circle id="hyCircle2" className="hyCircle" r="10" cx="0" cy="0" fill="#BE3C97" />
            <circle id="hyCircle3" className="hyCircle" r="10" cx="0" cy="0" fill="#E33170" />
            <circle id="hyCircle4" className="hyCircle" r="10" cx="0" cy="0" fill="#FF2953" />

            <text className="hyText" id="hyText1" fill="#B141A5">UX</text>
            <text className="hyText" id="hyText2" fill="#BE3C97">Visual</text>
            <text className="hyText" id="hyText3" fill="#E33170">Engineering</text>
            <text className="hyText" id="hyText4" fill="#FF2953">Research</text>

          </svg>
          <div className="row about__hybrid--header">
            <div className="about__hybrid--header__text">
              <h2 className="pb2">How we work.</h2>
              <div className="typ--b1">
                We believe the best products are created by hybrid teams. Designers, researchers, and developers work shoulder-to-shoulder in our studio to create experiences that are beautiful and grounded in real user needs.
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

AboutHybrid.propTypes = {
  scrollContainer: PropTypes.object,
  breakpoint: PropTypes.object
};

const mapStateToProps = state => ({
  breakpoint: state.breakpoint
});

export default connect(mapStateToProps)(GSAP()(AboutHybrid));
