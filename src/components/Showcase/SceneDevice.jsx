import React from 'react';
import mojs from 'mo-js';

export const SceneDevice = props => {
  const { id, body, overlay, shadow } = props;

  return (
    <div className="scene__device">
      { body && <img className="scene__device__body" src={ body } alt={ id } /> }
      { overlay && <img className="scene__device__overlay" src={ overlay } alt={ id } /> }
      { shadow && <img className="scene__device__shadow" src={ shadow } alt={ id } /> }
    </div>
  );
};

SceneDevice.propTypes = {
  body: React.PropTypes.string,
  overlay: React.PropTypes.string,
  shadow: React.PropTypes.string,
  id: React.PropTypes.string
};

export default SceneDevice;
