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
      animationInProgress: false
    };
  }

  componentDidMount () {
    this.resetDevice();
  }

  componentDidUpdate (prevProps) {
    const { bannerState, index } = this.props;

    if (prevProps.bannerState.active !== bannerState.active) {
      if (bannerState.active === index) this.drawDevice();
      if (bannerState.active !== index) this.resetDevice();
    }
  }

  drawDevice () {
    const device = ReactDOM.findDOMNode(this.refs.device);
    const paths = device.querySelectorAll('path');
    console.log(this.props.id);

    this.animate = new mojs.Tween({
      duration: 2000,
      delay: 200,
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

    if (overlay) overlay.style.opacity = 0;

    if (animationInProgress) this.animate.pause();

    paths.forEach(path => {
      const totalLength = path.getTotalLength();
      path.style.strokeDasharray = `${totalLength}, ${totalLength}`;
      path.style.strokeDashoffset = `-${totalLength}`;
    });
  }

  fadeInOverlay () {
    const overlay = ReactDOM.findDOMNode(this.refs.overlay);

    new mojs.Tween({
      duration: 400,
      onUpdate: progress => {
        overlay.style.opacity = progress;
      }
    }).play();
  }

  render () {
    const { id, caption, onDidMount, svg, overlay } = this.props;

    return (
      <div
        ref={ (el) => onDidMount instanceof Function && onDidMount(el) }
        className={ `scene sc__${id} layout--fullheight row` }
        data-id={ id }
      >
        <div ref="device" className="scene__device">
          { svg && svg }
          { overlay && <img ref="overlay" className="scene__overlay" src={ overlay } alt={ id } /> }
        </div>

        <div className="scene__cta typ--center typ--white">
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
