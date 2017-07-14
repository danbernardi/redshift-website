import React from 'react';
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
    if (watcher.isFullyInViewport) { this.setState({ moveTitle: false }); };
    if (watcher.isAboveViewport) { this.setState({ moveTitle: true }); }
  };

  render () {
    return (
      <div>
        <Watcher
          offset={ { top: '0', position: 'fixed' } }
          stateChange={ this.watcherCallback.bind(this) }
        />
        <div className={ `${this.state.moveTitle && 'about--header_move' } row about--header hide--tlg` } >
          <div className="col-7 col-12--dlg row about--title">
            <h1 className="typ--bold typ--redshift pb2 pb1--mlg">About Redshift.</h1>
            <h3 className="pb2">
              We are an award-winning agency dedicated to creating simple, meaningful experiences for users and positive results for our clients.
            </h3>
          </div>
          <div className="col-4 col-last col-12--dlg" />
        </div>
        <div className="row show--tlg">
          <h1 className="typ--bold typ--redshift pb2 pb1--mlg">About Redshift.</h1>
          <h3 className="pb2">
            We are an award-winning agency dedicated to creating simple, meaningful experiences for users and positive results for our clients.
          </h3>
        </div>

      </div>
    );
  }
}

export default AboutTitle;
