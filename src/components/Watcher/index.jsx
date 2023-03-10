import React from 'react';
import { Watch } from 'scrollmonitor-react';
import PropTypes from 'prop-types';

/**
 * Renders a watcher component that is wrapped by the Watch higher order component
 * for handling events when divs are scrolled into view
 * @param {Object} props
 * @param  {string} [props.classes]                 Optional classes string to apply to watcher
 * @param {Object} props.offset                     Style object containing css rules to apply to watcher
 * @param {Object} props.children                   React node that houses the content to be watched
 * @return {React.Component}
 */

export class Watcher extends React.Component {
  componentDidMount () {
    // clears race condition for initiating watcher
    setTimeout(() => {
      this.props.startWatcher();
    }, 200);
  }

  render () {
    const { classes, offset, children } = this.props;

    return (
      <div className={ `watcher ${classes}` } style={ offset }>{ children }</div>
    );
  }
}

Watcher.defaultProps = {
  classes: ''
};

Watcher.propTypes = {
  classes: PropTypes.string,
  offset: PropTypes.object,
  children: PropTypes.node,
  startWatcher: PropTypes.func.isRequired
};

export default Watch(Watcher);
