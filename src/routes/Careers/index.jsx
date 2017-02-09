import React from 'react';
import CareersJobs from './CareersJobs';
import * as actions from 'store/actions';
import { connect } from 'react-redux';
import Watcher from 'components/Watcher/index';
import './style.scss';
import { jobDetails } from 'data/jobDetails';
import Footer from 'components/Footer';

export class Careers extends React.Component {
  watcherCallback (watcher) {
    const { dispatch } = this.props;

    if (watcher.isAboveViewport) {
      // watcher is in view
      dispatch(actions.setHeaderTheme('pink'));
    }

    if (watcher.isFullyInViewport) {
      // watcher is partly out of view
      dispatch(actions.setHeaderTheme('white'));
    }
  };

  render () {
    return (
      <div>
        <section className="about-gradient careers-hero row">
          <div className="careers-page-title">
            <div className="hero--scene-text">
              <h1 className="typ--bold typ--white">Join the team.</h1>
            </div>
          </div>
        </section>
        <section>
          <Watcher
            offset={ { bottom: '8.5rem' } }
            enterViewport={ (watcher) => this.watcherCallback(watcher) }
            stateChange={ (watcher) => this.watcherCallback(watcher) }
          />
          <div className="row row--maxwidth">
            {
              jobDetails.map((job, index) => (
                <CareersJobs key={ index } job={ job } />
              ))
            }
          </div>
        </section>'
        <Footer />
      </div>
    );
  }
}

Careers.propTypes = {
  dispatch: React.PropTypes.func,
  modalOpen: React.PropTypes.bool
};

const mapStateToProps = state => ({
  modalOpen: state.modalState.open
});

export default connect(mapStateToProps)(Careers);
