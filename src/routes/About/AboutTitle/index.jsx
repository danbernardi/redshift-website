import React from 'react';
import './Slides.scss';
import Watcher from 'components/Watcher';

class AboutTitle extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      hover: false,
      moveTitle: false
    };
  }

  watcherCallback (watcher) {
    // console.log('watcher', watcher);
    if (watcher.isFullyInViewport) { this.setState({ moveTitle: false }); };
    if (watcher.isAboveViewport) { this.setState({ moveTitle: true }); }
  };

  // App state
  render () {
    return (
      <div>
        <Watcher
          // autoStart={ false }
          stateChange={ this.watcherCallback.bind(this) }
          // enterViewport={ this.watcherCallback.bind(this) }
        />
        <div className={ `${this.state.moveTitle && 'about--header_move' } row about--header` } >
          <div className="col-7 col-12--tlg row about--title">
            <h1 className="typ--bold typ--redshift pb2 pb1--mlg">About Redshift.</h1>
            <h3 className="pb2">
              We are an award-winning agency dedicated to creating simple, meaningful experiences for users and positive results for our clients.
            </h3>
          </div>
          <div className="col-4 col-last" />
        </div>
      </div>
    );
  }
}

export default AboutTitle;
