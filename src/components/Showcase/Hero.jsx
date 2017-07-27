import React from 'react';
import GSAP from 'react-gsap-enhancer';
import { TimelineMax, Power3 } from 'gsap';
import { isInRange } from 'utils/animation';
import 'components/ScrollTrigger/ScrollTrigger.scss';
import PropTypes from 'prop-types';
import SplitText from 'vendor/gsap-plugins/SplitText';

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
    return isInRange(nextProps.animationProgress, 0, 1);
  }

  componentWillReceiveProps (nextProps) {
    const { animationProgress } = nextProps;
    if (isInRange(animationProgress, 0, 1)) {
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

  createIntroTimeline () {
    const textChars = new SplitText('.hero__text', { type: 'chars, words' });

    return new TimelineMax({})
      .set('.hero__text', { perspective: 400 })
      .staggerFrom(textChars.chars, 0.5, {
        opacity: 0,
        ease: Power3.easeOut
      }, 0.02, location.pathname === '/work' ? '0' : '+=1.75');
  }

  createOutroTimeline ({ target }) {
    const text = target[0].querySelector('.hero__text');
    const scroller = target[0].querySelector('.scrolltrigger');

    //Timeline progresses from 0 - 1
    //Pieces, delays and overlaps should total 1
    return new TimelineMax({
      onComplete: () => {
        this.complete = true;
      }
    })
    .pause()
    .addPause(0)
    .staggerTo([text, scroller], 0.2, { y: '-300vh', opacity: 0 }, 0.02);
  }

  render () {
    const { onDidMount, clickCallback } = this.props;

    return (
      <section
        ref={ onDidMount }
        className="hero layout--fullheight layout--flex__center-col"
      >

        <div className="row">
          <h1 className="hero__text typ--bold typ--redshift" style={ { maxWidth: '110rem', pointerEvents: 'none' } }>
            <span data-animationName="text2">
              We are Redshift. We design digital products and experiences.
            </span>
          </h1>
        </div>

        { this.props.animationProgress <= 0.3 ? <div data-animationName="scroller" className="scrolltrigger" onClick={ () => {
          clickCallback(1);
        } }>
          <div className="casestudy__scrollarrow">
            <img src={ require('assets/img/down-arrow.svg') } alt="Scroll down" />
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
  clickCallback: PropTypes.func,
  animationProgress: PropTypes.number
};

export default (GSAP()(Hero));