import React from 'react';
import mojs from 'mo-js';
import GSAP from 'react-gsap-enhancer';
import { isInRange } from 'utils/animation';
import { connect } from 'react-redux';
import 'components/ScrollTrigger/ScrollTrigger.scss';

export class Hero extends React.Component {
  constructor (props) {
    super(props);

    this.timeline = null;
    this.state = {
      animationProgress: 0
    };
  }

  componentDidMount () {
    if (location.pathname === '/work' || this.props.loaded) {
      this.animatePageIn();
    }

    this.timeline = this.addAnimation(this.createTimeline);
  }

  shouldComponentUpdate (nextProps) {
    return this.props.loaded !== nextProps.loaded && isInRange(nextProps.animationProgress, 0, 1);
  }

  componentDidUpdate () {
    this.animatePageIn();
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

  createTimeline ({ target, options }) {
    const sceneWrapper = target;
    const defaultOptions = {};

    const tlOptions = Object.assign({}, defaultOptions, options);
    //Timeline progresses from 0 - 1
    //Pieces, delays and overlaps should total 1

    return new TimelineMax({
      onUpdate: () => {
        //Do stuff here
      }
    })
    .pause()
  }

  animatePageIn () {
    this.animateElementIn(this.us, 0);
    this.animateElementIn(this.mission, 600);
    this.animateElementIn(this.scroller, 1200);
  }

  animateElementIn (el, delay) {
    new mojs.Tween({
      duration: 600,
      delay,
      easing: 'cubic.inout',
      onUpdate: progress => {
        el.style.opacity = progress;
      }
    }).play();
  }

  render () {
    const { onDidMount, clickCallback } = this.props;

    let styles = {
      opacity: 0
    };

    return (
      <section
        ref={ this.props.onDidMount }
        className="hero layout--fullheight"
      >

        <div className="row" style={ { top: '50%', transform: 'translateY(-50%)' } }>
          <h1 className="typ--bold typ--redshift" style={ { maxWidth: '110rem' } }>
            <span ref={ (element) => { this.us = element; } } style={ styles }>
              Redshift creates <br />
            </span>
            <br className="show--tsm" />
            <span ref={ (element) => { this.mission = element; } } style={ styles }>
              simple, meaningful digital products<span className="typ--redshift">.</span>
            </span>
          </h1>
        </div>

        { this.props.animationProgress <= 0.3 ?
          <div ref={ (element) => { this.scroller = element; } } style={ styles } className="scrolltrigger" onClick={ () => {
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
  loaded: React.PropTypes.bool
};

const injectStateProps = state => ({
  loaded: state.loaded
});

export default connect(injectStateProps)(GSAP()(Hero));
