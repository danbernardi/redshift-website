import React from 'react';
import { Watch } from 'scrollmonitor-react';

const Watcher = props => {
  const { classes, offset } = props;

  return (
    <div className={ `anchor watcher ${classes && classes}` } style={ offset } />
  );
};

Watcher.defaultProps = {
  classes: ''
};

Watcher.propTypes = {
  classes: React.PropTypes.string,
  offset: React.PropTypes.object
};

export default Watch(Watcher);
