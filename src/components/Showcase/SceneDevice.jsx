import React from 'react';
// import mojs from 'mo-js';

export class SceneDevice extends React.Component {
  componentWillReceiveProps (nextProps) {
    const { active } = this.props;
    if (!nextProps.active && active) {
      // animate device out
    }
    if (nextProps.active && !active) {
      // animate device in
    }
  }

  render () {
    const { id, body, overlay, shadow } = this.props;

    return (
      <div className="scene__device">
        { body && <img className="scene__device__body" src={ body } alt={ id } /> }
        { overlay && <img className="scene__device__overlay" src={ overlay } alt={ id } /> }
        { shadow && <img className="scene__device__shadow" src={ shadow } alt={ id } /> }
      </div>
    );
  }
}

SceneDevice.propTypes = {
  body: React.PropTypes.string,
  overlay: React.PropTypes.string,
  shadow: React.PropTypes.string,
  id: React.PropTypes.string,
  active: React.PropTypes.bool
};

export default SceneDevice;
