import React from 'react';
// import ReactDOM from 'react-dom';
// import { mapRange } from 'utils/animation';
// import mojs from 'mo-js';
import { connect } from 'react-redux';
import SceneDevice from './SceneDevice';
import SceneText from './SceneText';
import './Scene.scss';

export class Scene extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      animationInProgress: false,
      active: true
    };
  }

  componentDidMount () {
    // this.resetDevice();
  }

  componentDidUpdate (prevProps, prevState) {
    const { bannerState, index } = this.props;

    if (prevProps.bannerState.active !== bannerState.active) {
      if (bannerState.active === index) this.setActive(true);
      if (bannerState.active !== index && prevState.active) this.setActive(false);
    }
  }

  setActive (state) {
    this.setState({ active: state });
  }

  render () {
    const { id, caption, onDidMount, device } = this.props;
    const { active } = this.state;

    return (
      <div
        ref={ (el) => onDidMount instanceof Function && onDidMount(el) }
        className={ `scene sc__${id}` }
        data-id={ id }
        style={ { pointerEvents: active ? 'auto' : 'none' } }
      >

        <SceneDevice
          id={ id }
          { ...device }
          active={ active }
        />

        <SceneText
          id={ id }
          caption={ caption }
          active={ active }
        />
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

export default connect(injectStateProps)(Scene);
