import React from 'react';
import mojs from 'mo-js';

export const SceneDevice = props => {
  const { id, svg, overlay } = props;

  return (
    <div className="scene__device">
      { svg && svg }
      { overlay && <img style={ { width: '685px', left: '74px', top: '254px' } } className="scene__overlay" src={ overlay } alt={ id } /> }
    </div>
  );
};

SceneDevice.propTypes = {
  svg: React.PropTypes.node,
  overlay: React.PropTypes.string,
  id: React.PropTypes.string
};

export default SceneDevice;
