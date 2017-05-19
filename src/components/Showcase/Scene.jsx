import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { isInRange } from 'utils/animation';
import './Scene.scss';
import { TimelineMax, Power3, Power1 } from 'gsap';
import GSAP from 'react-gsap-enhancer';

const SUPPORT_TOUCH = 'ontouchstart' in window;

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
    const direction = this.props.index % 2 !== 0 ? 'left' : 'right';
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

  shouldComponentUpdate () {
    return this.animationInRange;
  }

  /**
   * Creates a timeline for animating the scene.  This is likely attached to scroll
   * @param  {Object} options.target  Attached by GSAP enhancer, this is the wrapping component.
   * @param  {Object} options.options Timeline options, if applicable
   * @return {Object}                 TimelineMax timeline
   */
  animateIn ({ target, options }) {
    const device = target.find({ 'data-animationName': 'device' });
    const deviceShadow = target.find({ 'data-animationName': 'device-shadow' });
    const sceneText = target.find({ 'data-animationName': 'cta-text' });

    const defaultOptions = {
      directionOffset: '100%',
      transformOrigin: options.direction === 'right' ? 'right bottom' : 'left bottom',
      rotation: 90,
      shadowOpacity: 0.2
    };

    const tlOptions = Object.assign({}, defaultOptions, options);

    //Timeline progresses from 0 - 1
    //Pieces delays and overlaps should total 1
    const deviceInTiming = 0.5;
    const deviceOutTiming = 0.5;

    return new TimelineMax()
    .pause()

    .from(device, deviceInTiming, {
      x: tlOptions.directionOffset,
      ease: Power1.easeOut,
      rotation: tlOptions.rotation,
      transformOrigin: tlOptions.transformOrigin
    }, 'deviceIn')

    .from(deviceShadow, deviceInTiming, {
      x: '15%',
      y: '50%'
    }, 'deviceIn')

    .from(deviceShadow, deviceInTiming, {
      opacity: tlOptions.shadowOpacity
    }, 'deviceIn')

    .from(sceneText, deviceInTiming / 2, {
      top: '100%',
      ease: Power3.easeOut
    }, `deviceIn+=${deviceInTiming / 2}`)

    .to(device, deviceOutTiming, {
      ease: Power3.easeIn,
      // x: '-50%',
      y: '-200%'
    }, 'deviceOut')

    .to(deviceShadow, deviceOutTiming, {
      ease: Power3.easeIn,
      x: options.direction === 'left' ? '10%' : '-10%',
      y: '10%'
    }, 'deviceOut')

    .to(sceneText, deviceOutTiming, {
      ease: Power3.easeIn,
      top: '-100%'
    }, 'deviceOut+=0.05')

    .to(sceneText, 0.1, {
      opacity: 0
    }, 'deviceOut+=0.20')

    .add('sceneComplete');
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
    const { id, caption, currentScene, index } = this.props;
    const { body, overlay, overlaymlg, overlaytlg, shadow } = this.props.device;
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
          { overlay &&
            <picture>
              <source srcSet={ overlay } media="(min-width: 1040px)" />
              { overlaytlg && <source srcSet={ overlaytlg } media="(min-width: 767px)" /> }
              <img src={ overlaymlg } className="scene__device__overlay" style={ { marginBottom: '1px' } } alt={ id } />
            </picture>
          }

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
  color: React.PropTypes.string,
  currentScene: React.PropTypes.number
};

const injectStateProps = state => ({
  bannerState: state.bannerState
});

export default connect(injectStateProps)(GSAP()(Scene));
