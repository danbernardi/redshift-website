import React from 'react';
import GSAP from 'react-gsap-enhancer';
import { connect } from 'react-redux';
import CustomEase from 'vendor/gsap-plugins/CustomEase';
import { TimelineLite, Power3 } from 'gsap';
import { isInRange } from 'utils/animation';
import PropTypes from 'prop-types';
import { breakpointIsGreaterThan } from 'utils/responsiveHelpers';
import './Hero.scss';

/**
 * Hero - Showcase Top
 *
 * @extends React.Component
 * @param {Object} props                React properties argument
 * @param {function} onDidMount             returns a reference to itself to the parent component when the container is mounted.
 * @param {function} reportAsLoaded         returns a function to the parent component when loaded
 * @param {number} animationProgress    measures speed of animation
 * @param {Object} breakpoint           captures browser width
 * @returns {React.Component}           Returns a react component
 */

export class Hero extends React.Component {
  constructor (props) {
    super(props);

    this.timeline = null;
    this.animationComplete = false;
    this.state = {
      animationProgress: 0
    };
  }

  componentDidMount () {
    this.introTimeline = this.addAnimation(this.createIntroTimeline);
    this.timeline = this.addAnimation(this.createOutroTimeline);
  }

  shouldComponentUpdate (nextProps) {
    return isInRange(nextProps.animationProgress, 0, 2);
  }

  componentWillReceiveProps (nextProps) {
    const { animationProgress } = nextProps;
    if (isInRange(animationProgress, 0, 2)) {
      this.setState({
        animationProgress
      }, () => {
        this.timeline.progress(animationProgress);
      });
    }

    if (this.props.animationProgress === 0 && nextProps.animationProgress > 0) {
      this.introTimeline.progress(1);
    }
  }

  createIntroTimeline ({ target }) {
    const text = target[0].querySelector('.hero__text');
    const tl = new TimelineLite();

    tl.from(text, 0.5, { opacity: 0, y: '-40px', ease: Power3.easeOut }, '+=1');
    return tl;
  }

  createOutroTimeline ({ target }) {
    const text = target[0].querySelector('.hero__text');

    //Timeline progresses from 0 - 1
    //Pieces, delays and overlaps should total 1
    return new TimelineLite({
      onComplete: () => {
        this.complete = true;
      }
    })
    .pause()
    .to(text, 1, { y: '-500vh', opacity: 0, ease: CustomEase.create('custom', 'M0,0 C0.282,0 0.79,0.698 1,1') });
  }

  render () {
    const { onDidMount, breakpoint } = this.props;

    return (
      <section
        ref={ onDidMount }
        className="hero layout--fullheight layout--flex__center-col"
      >

        <div className="row">
          <h2 className="hero__text rs--gradienttext typ--bold" style={ { maxWidth: '110rem', pointerEvents: 'none' } }>
            <span data-animationName="text2">
              We are Redshift.
              <br />
              We create digital products&nbsp;
             { breakpointIsGreaterThan('tabletMd', breakpoint.size) && <br /> }
              that people use and remember.
            </span>
          </h2>
        </div>

        { this.props.animationProgress <= 0.3 ? <div data-animationName="scroller" className="scrolltrigger">
          <div className="casestudy__scrollarrow" onClick={ () => { this.props.scrollTrigger(1); } }>
            <img src='https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/scroll-arrow-redshift.svg' alt="Scroll down" />
          </div>
        </div>
        : null
        }
      </section>
    );
  }
}

Hero.propTypes = {
  onDidMount: PropTypes.func,
  animationProgress: PropTypes.number,
  scrollTrigger: PropTypes.func,
  breakpoint: PropTypes.object
};

const mapStateToProps = state => ({
  breakpoint: state.breakpoint
});

export default connect(mapStateToProps)(GSAP()(Hero));
