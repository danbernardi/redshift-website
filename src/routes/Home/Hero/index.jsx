import React from 'react';
import GSAP from 'react-gsap-enhancer';
import { TimelineMax } from 'gsap';
import { isInRange } from 'utils/animation';
import 'components/ScrollTrigger/ScrollTrigger.scss';
import PropTypes from 'prop-types';

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
  }

  createIntroTimeline ({ target }) {
    const text1 = target.find({ 'data-animationName': 'text1' });
    const text2 = target.find({ 'data-animationName': 'text2' });
    const scroller = target.find({ 'data-animationName': 'scroller' });

    return new TimelineMax({
      onUpdate: () => {
        //Do stuff here
      },
      onComplete: () => {
        this.introComplete = true;
      }
    })
    .staggerTo([text1, text2, scroller], 1, { opacity: 1 }, 0.5);
  }

  createOutroTimeline ({ target }) {
    const text1 = target.find({ 'data-animationName': 'text1' });
    const text2 = target.find({ 'data-animationName': 'text2' });
    const scroller = target.find({ 'data-animationName': 'scroller' });

    //Timeline progresses from 0 - 1
    //Pieces, delays and overlaps should total 1
    return new TimelineMax({
      onUpdate: () => {
        //Do stuff here
      },
      onComplete: () => {
        this.complete = true;
      }
    })
    .pause()
    .addPause(0.15)
    .staggerTo([text1, text2, scroller], 0.5, { opacity: 0 }, 0.05);
  }

  render () {
    const { onDidMount, clickCallback } = this.props;

    let styles = {
      opacity: 0
    };

    return (
      <section
        ref={ onDidMount }
        className="hero layout--fullheight"
      >

        <div className="row" style={ { top: '50%', transform: 'translateY(-50%)' } }>
          <h1 className="typ--bold typ--redshift" style={ { maxWidth: '110rem' } }>
            <span data-animationName="text1" style={ styles }>
              Redshift creates simple,&nbsp;
            </span>
            <br className="hide--tsm" />
            <span data-animationName="text2" style={ styles }>
              meaningful digital products<span className="typ--redshift">.</span>
            </span>
          </h1>
        </div>

        { this.props.animationProgress <= 0.3 ? <div data-animationName="scroller" style={ styles } className="scrolltrigger" onClick={ () => {
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
