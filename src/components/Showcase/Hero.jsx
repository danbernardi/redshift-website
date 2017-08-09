import React from 'react';
import GSAP from 'react-gsap-enhancer';
import CustomEase from 'vendor/gsap-plugins/CustomEase';
import { TimelineLite, Power3 } from 'gsap';
import { isInRange } from 'utils/animation';
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

  createIntroTimeline () {
    const textChars = new SplitText('.hero__text', { type: 'chars, words' });

    return new TimelineLite({})
      .set('.hero__text', { perspective: 400 })
      .staggerFrom(textChars.chars, 0.5, {
        opacity: 0,
        ease: Power3.easeOut
      }, 0.02, '+=0.75');
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
    const { onDidMount } = this.props;

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

        { this.props.animationProgress <= 0.3 ? <div data-animationName="scroller" className="scrolltrigger">
          <div className="casestudy__scrollarrow">
            <img src={ require('assets/img/scroll-arrow.svg') } alt="Scroll down" />
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
  animationProgress: PropTypes.number
};

export default (GSAP()(Hero));
