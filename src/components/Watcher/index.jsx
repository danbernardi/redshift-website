import React from 'react';
import { Watch } from 'scrollmonitor-react';
import PropTypes from 'prop-types';

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
  classes: PropTypes.string,
  offset: PropTypes.object
};

export default Watch(Watcher);
