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
    const directionOffset = '-200%';

    this.timeline = this.addAnimation(this.animateIn, {
      direction,
      directionOffset,
      transformOrigin: direction === 'left' ? 'right top' : 'left top',
      rotation: direction === 'left' ? '-25' : '25'
    });
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

  setActive (state) {
    this.setState({ active: state });
  }

  animateIn ({ target, options }) {
    const device = target.find({ animationName: 'device' });
    const deviceBody = target.find({ animationName: 'device-body' });
    const deviceOverlay = target.find({ animationName: 'device-overlay' });
    const deviceShadow = target.find({ animationName: 'device-shadow' });


    const sceneText = target.find({ animationName: 'cta-text' });
    const sceneCaption = target.find({ animationName: 'cta-caption' });
    const sceneLink = target.find({ animationName: 'cta-link' });

    const defaultOptions = {
      direction: 'right',
      directionOffset: '-100%',
      transformOrigin: 'left bottom',
      rotation: 90,
      shadowOpacity: 0.2
    };

    const tlOptions = Object.assign({}, defaultOptions, options);
    //Timeline progresses from 0 - 1
    //Pieces delays and overlaps should total 1

    const deviceTiming = 0.25;

    return new TimelineMax({
      onUpdate: () => {
        //Do stuff here
      }
    })
    .pause()
    .from(device, deviceTiming, {
      [tlOptions.direction]: tlOptions.directionOffset,
      ease: Power3.easeOut,
      rotation: tlOptions.rotation,
      transformOrigin: tlOptions.transformOrigin
    }, 'deviceIn')
    .from(deviceShadow, deviceTiming, {
      top: '50%'
    }, 'deviceIn')
    .from(deviceShadow, deviceTiming, {
      opacity: tlOptions.shadowOpacity
    }, 'deviceIn')
    .from(sceneText, 0.1, {
      opacity: 0
    }, 'deviceIn')
    .addPause(0.4);
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

        <div animationName="device" className="scene__device" >
          { body && <img animationName="device-body" className="scene__device__body" src={ body } alt={ id } /> }
          { overlay && <img animationName="device-overlay" className="scene__device__overlay" src={ overlay } alt={ id } /> }
          { shadow && <img animationName="device-shadow" className="scene__device__shadow" src={ shadow } alt={ id } /> }
        </div>

        <div animationName="cta-text" className="scene__cta typ--white mx10 mx8--dsm mx3--tlg">
          <h2 animationName="cta-caption" className="scene__caption mb4 mb2--mlg typ--bold">
            { caption.map((string, index) => (
              <span key={ index }>{ string }</span>
            )) }
          </h2>

          <Link animationName="cta-link" className="scene__link typ--bold typ--h6" to={ `/work/${id}` } >
            View project
          </Link>
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
