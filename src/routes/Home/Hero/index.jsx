import React from 'react';
import GSAP from 'react-gsap-enhancer';
import { isInRange } from 'utils/animation';
import { connect } from 'react-redux';
import 'components/ScrollTrigger/ScrollTrigger.scss';

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
    if (location.pathname === '/work' || this.props.loaded) {
      //TODO: Rework how this scene transition function is passed down
      //This moves to the next scene
      this.props.clickCallback(1);
    }

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

  createOutroTimeline ({ target, options }) {
    const sceneWrapper = target;
    const defaultOptions = {};

    const text1 = target.find({ 'data-animationName': 'text1' });
    const text2 = target.find({ 'data-animationName': 'text2' });
    const scroller = target.find({ 'data-animationName': 'scroller' });

    const tlOptions = Object.assign({}, defaultOptions, options);
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
              Redshift creates <br />
            </span>
            <br className="show--tsm" />
            <span data-animationName="text2" style={ styles }>
              simple, meaningful digital products<span className="typ--redshift">.</span>
            </span>
          </h1>
        </div>

        { this.props.animationProgress <= 0.3 ? <div data-animationName="scroller" style={ styles } className="scrolltrigger" onClick={ () => {
          clickCallback(1);
        } }>
          <img src={ require('assets/img/down-arrow.png') } alt="Scroll to the next section" />
        </div>
        : null
        }
      </section>
    );
  }
}

Hero.propTypes = {
  onDidMount: React.PropTypes.func,
  clickCallback: React.PropTypes.func,
  loaded: React.PropTypes.bool,
  animationProgress: React.PropTypes.number
};

const injectStateProps = state => ({
  loaded: state.loaded
});

export default connect(injectStateProps)(GSAP()(Hero));
