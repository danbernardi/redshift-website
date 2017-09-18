import React from 'react';
import { Link } from 'react-router';
import { isInRange } from 'utils/animation';
import './Scene.scss';
import { TimelineLite, Power3, Power1 } from 'gsap';
import GSAP from 'react-gsap-enhancer';
import PropTypes from 'prop-types';

/**
 * Showcases Scenes for Homepage
 *
 * @extends React.Component
 * @param {Object} props                    React properties argument
 * @param {number} index                    number of featured case studies to render
 * @param {number} animationProgress        timing of animation
 * @param {string} id                       gives an id to the images to check if they are loaded
 * @param {array} caption                   case study blurbs on homepage
 * @param {function} onDidMount             returns a reference to itself to the parent component when the container is mounted.
 * @param {Object} device                   case study images
 * @param {function} reportAsLoaded         returns a function to the parent component when loaded
 * @returns {React.Component}               Returns a react component
 */

export class Scene extends React.Component {
  constructor (props) {
    super(props);

    this.loadedImages = [];
    this.timeline = null;
    this.state = {
      animationProgress: 0,
      active: true,
      loaded: false
    };
  }

  componentDidMount () {
    const direction = this.props.index % 2 === 0 ? 'right' : 'left';
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
   * @return {Object}                 TimelineLite timeline
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

    return new TimelineLite()
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

  loadImage (id) {
    const { reportAsLoaded } = this.props;

    if (this.loadedImages.indexOf(id) === -1) this.loadedImages.push(id);
    if (this.loadedImages.length === 3 && reportAsLoaded instanceof Function) {
      reportAsLoaded(this.props.id);
      this.setState({ loaded: true });
    }
  }

  render () {
    const { id, caption } = this.props;
    const { body, overlay, overlaymlg, overlaytlg, shadow } = this.props.device;
    const { active, loaded } = this.state;

    return (
      <div
        className={ `scene sc__${id}` }
        data-id={ id }
        style={ {
          pointerEvents: active ? 'auto' : 'none'
        } }
        ref={ this.props.onDidMount }
      >
        <div data-animationName="device" className="scene__device" >
          { body &&
            <img
              data-animationName="device-body"
              className="scene__device__body"
              onLoad={ () => !loaded && this.loadImage('device') }
              src={ body }
              alt={ id }
            />
          }
          { overlay &&
            <picture>
              <source srcSet={ overlay } media="(min-width: 1040px)" />
              { overlaytlg && <source srcSet={ overlaytlg } media="(min-width: 767px)" /> }
              <img
                onLoad={ () => !loaded && this.loadImage('overlay') }
                src={ overlaymlg }
                className="scene__device__overlay"
                style={ { marginBottom: '1px' } }
                alt={ id }
              />
            </picture>
          }

          { shadow &&
            <img
              data-animationName="device-shadow"
              className="scene__device__shadow"
              onLoad={ () => !loaded && this.loadImage('shadow') }
              src={ shadow }
              alt={ id }
            />
          }
        </div>

        <div data-animationName="cta-text" className="scene__cta typ--white">
          <div>
            <h2 data-animationName="cta-caption" className="scene__caption typ--bold">
              { caption.map((string, index) => (
                <span key={ index }>{ string }&nbsp;</span>
              )) }
            </h2>

            <Link data-animationName="cta-link" className="scene__link typ--bold typ--button typ--h6" to={ `/work/${id}` } >
              View project
            </Link>
          </div>
        </div>

      </div>
    );
  }
}

Scene.propTypes = {
  index: PropTypes.number,
  animationProgress: PropTypes.number,
  id: PropTypes.string,
  caption: PropTypes.array,
  onDidMount: PropTypes.func,
  device: PropTypes.object,
  reportAsLoaded: PropTypes.func
};

export default GSAP()(Scene);
