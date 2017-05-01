import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { isInRange } from 'utils/animation';
import './Scene.scss';
import { TimelineMax } from 'gsap';
import GSAP from 'react-gsap-enhancer';

export class Scene extends React.Component {
  constructor (props) {
    super(props);

    this.timeline = null;
    this.state = {
      animationInProgress: false,
      animationProgress: 0,
      active: true
    };
  }

  componentDidMount () {
    const direction = this.props.index % 2 === 0 ? 'left' : 'right';
    const directionOffset = direction === 'left' ? '-200%' : '200%';
    this.animationInRange = null;

    this.timeline = this.addAnimation(this.animateIn, {
      direction,
      directionOffset,
      transformOrigin: direction === 'left' ? 'right top' : 'left top',
      rotation: direction === 'left' ? '-25' : '25'
    });
  }

  componentWillReceiveProps (nextProps) {
    const { animationProgress } = nextProps;
    this.animationInRange = isInRange(animationProgress, 0, 1);

    if (isInRange(animationProgress, 0, 1)) {
      this.setState({
        animationProgress
      }, () => {
        this.timeline.progress(animationProgress);
      });
    } else {
      this.timeline.progress(0);
    }
  }

  shouldComponentUpdate (nextProps) {
    return this.animationInRange;
  }

  setActive (state) {
    this.setState({ active: state });
  }

  animateIn ({ target, options }) {
    const sceneWrapper = target;
    const device = target.find({ 'data-animationName': 'device' });
    const deviceBody = target.find({ 'data-animationName': 'device-body' });
    const deviceOverlay = target.find({ 'data-animationName': 'device-overlay' });
    const deviceShadow = target.find({ 'data-animationName': 'device-shadow' });

    const sceneText = target.find({ 'data-animationName': 'cta-text' });
    const sceneCaption = target.find({ 'data-animationName': 'cta-caption' });
    const sceneLink = target.find({ 'data-animationName': 'cta-link' });

    const defaultOptions = {
      directionOffset: '100%',
      transformOrigin: 'left bottom',
      rotation: 90,
      shadowOpacity: 0.2
    };

    const tlOptions = Object.assign({}, defaultOptions, options);
    //Timeline progresses from 0 - 1
    //Pieces delays and overlaps should total 1

    const deviceInTiming = 0.20;
    const deviceOutTiming = 0.25;

    return new TimelineMax({
      onUpdate: () => {
        //Do stuff here
      }
    })
    .pause()
    .from(device, deviceInTiming, {
      x: tlOptions.directionOffset,
      ease: Power1.easeOut,
      rotation: tlOptions.rotation,
      transformOrigin: tlOptions.transformOrigin
    }, 'deviceIn')

    .from(deviceShadow, deviceInTiming, {
      y: '50%'
    }, 'deviceIn')

    .from(deviceShadow, deviceInTiming, {
      opacity: tlOptions.shadowOpacity
    }, 'deviceIn')

    .from(sceneText, deviceInTiming, {
      top: '100%'
    }, 'deviceIn')

    .addPause(0.55)

    .to(sceneText, deviceOutTiming, {
      top: '-100%'
    }, 'deviceOut')

    .to(device, deviceOutTiming, {
      ease: Power3.easeIn,
      // x: '-50%',
      y: '-200%'
    }, 'deviceOut')

    // .to(sceneText, 0.2, {
    //   opacity: 0
    // }, 'deviceOut-=.15')
    .to(deviceShadow, deviceOutTiming, {
      ease: Power3.easeIn,
      y: '10%',
      x: '-10%'
    }, 'deviceOut')
    .add('sceneComplete')
  }

  // Plays the animation
  playAnimation () {
    this.timeline.play();
  }

  // Pauses the animation
  pauseAnimation () {
    this.timeline.pause();
  }

  render () {
    const { id, caption } = this.props;
    const { body, overlay, shadow } = this.props.device;
    const { active } = this.state;

    return (
      <div
        className={ `scene sc__${id}` }
        data-id={ id }
        style={ { pointerEvents: active ? 'auto' : 'none' } }
        ref={ this.props.onDidMount }
      >
        <div data-animationName="device" className="scene__device" >
          { body && <img data-animationName="device-body" className="scene__device__body" src={ body } alt={ id } /> }
          { overlay && <img data-animationName="device-overlay" className="scene__device__overlay" src={ overlay } alt={ id } /> }
          { shadow && <img data-animationName="device-shadow" className="scene__device__shadow" src={ shadow } alt={ id } /> }
        </div>

        <div data-animationName="cta-text" className="scene__cta typ--white mx10 mx8--dsm mx3--tlg">
          <div>
            <h2 data-animationName="cta-caption" className="scene__caption mb4 mb2--mlg typ--bold">
              { caption.map((string, index) => (
                <span key={ index }>{ string }</span>
              )) }
            </h2>

            <Link data-animationName="cta-link" className="scene__link typ--bold typ--h6" to={ `/work/${id}` } >
              View project
            </Link>
          </div>
        </div>

      </div>
    );
  }
}

Scene.propTypes = {
  index: React.PropTypes.number,
  id: React.PropTypes.string,
  caption: React.PropTypes.array,
  onDidMount: React.PropTypes.func,
  device: React.PropTypes.object,
  bannerState: React.PropTypes.object,
  color: React.PropTypes.string
};

const injectStateProps = state => ({
  bannerState: state.bannerState
});

export default connect(injectStateProps)(GSAP()(Scene));
