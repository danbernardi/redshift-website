import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { mapRange } from 'utils/animation';
import mojs from 'mo-js';
import { connect } from 'react-redux';
import './Scene.scss';

export class Scene extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      animationInProgress: false,
      inactive: true
    };
  }

  componentDidMount () {
    this.resetDevice();
  }

  componentDidUpdate (prevProps, prevState) {
    const { bannerState, index } = this.props;

    if (prevProps.bannerState.active !== bannerState.active) {
      if (bannerState.active === index) {
        this.drawDevice();
        this.fadeText('in');
      }

      if (bannerState.active !== index && !prevState.inactive) {
        this.resetDevice();
        this.fadeText('out');
      }
    }
  }

  fadeText (direction) {
    const cta = ReactDOM.findDOMNode(this.refs.cta);

    const animate = new mojs.Tween({
      duration: 500,
      easing: 'cubic.inout',
      onUpdate: progress => { cta.style.opacity = progress; }
    });

    if (direction === 'in') animate.play();
    if (direction === 'out') animate.playBackward();
  }

  drawDevice () {
    const device = ReactDOM.findDOMNode(this.refs.device);
    const paths = device.querySelectorAll('path');
    this.setState({ inactive: false });
    device.style.opacity = 1;

    this.animate = new mojs.Tween({
      duration: 2000,
      delay: 400,
      easing: 'cubic.inout',
      onUpdate: (progress) => {
        paths.forEach(path => {
          const totalLength = path.getTotalLength();
          const mappedOffset = mapRange(progress, 0, 1, totalLength, 0);
          path.style.strokeDashoffset = mappedOffset;
        });
      },
      onPlaybackStart: () => this.setState({ animationInProgress: true }),
      onPlaybackStop: () => this.setState({ animationInProgress: false }),
      onPlaybackComplete: () => this.fadeInOverlay()
    }).play();
  }

  resetDevice () {
    const { animationInProgress } = this.state;
    const device = ReactDOM.findDOMNode(this.refs.device);
    const paths = device.querySelectorAll('path');
    const overlay = ReactDOM.findDOMNode(this.refs.overlay);

    if (animationInProgress) this.animate.pause();
    this.setState({ inactive: true });

    new mojs.Tween({
      duration: 600,
      easing: 'cubic.inout',
      onUpdate: progress => {
        device.style.opacity = progress;
        if (overlay) overlay.style.opacity = progress;
      },
      onPlaybackComplete: () => {
        paths.forEach(path => {
          const totalLength = path.getTotalLength();
          path.style.strokeDasharray = `${totalLength}, ${totalLength}`;
          path.style.strokeDashoffset = totalLength;
          // path.style.strokeDashoffset = 0;
        });
      }
    }).playBackward();
  }

  fadeInOverlay () {
    const overlay = ReactDOM.findDOMNode(this.refs.overlay);

    if (overlay) {
      new mojs.Tween({
        duration: 400,
        onUpdate: progress => {
          overlay.style.opacity = progress;
        }
      }).play();
    }
  }

  render () {
    const { id, caption, onDidMount, svg, overlay } = this.props;
    const { inactive } = this.state;

    return (
      <div
        ref={ (el) => onDidMount instanceof Function && onDidMount(el) }
        className={ `scene sc__${id} layout--fullheight parallax__group` }
        data-id={ id }
        style={ { pointerEvents: inactive ? 'none' : 'auto' } }
      >
        <div className="parallax__layer parallax__layer--deep">
          <div ref="device" className="scene__device">
            { svg && svg }
            { overlay && <img style={ { width: '685px', left: '74px', top: '254px' } } ref="overlay" className="scene__overlay" src={ overlay } alt={ id } /> }
          </div>
        </div>

        <div className="parallax__layer parallax__layer--back">
          <div ref="cta" className="scene__cta typ--center typ--white">
            <div className="row">
              <h2 className="scene__caption mb4 typ--bold">
                { caption.map((string, index) => (
                  <span key={ index }>{ string }</span>
                )) }
              </h2>

              <Link className="scene__link typ--bold typ--h6" to={ `/work/${id}` }>
                View project
              </Link>
            </div>
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
  svg: React.PropTypes.node,
  overlay: React.PropTypes.string,
  bannerState: React.PropTypes.object
};

const injectStateProps = state => ({
  bannerState: state.bannerState
});

export default connect(injectStateProps)(Scene);
