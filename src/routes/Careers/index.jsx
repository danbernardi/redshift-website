import React from 'react';
import CareersJobs from './CareersJobs';
import * as actions from 'store/actions';
import { connect } from 'react-redux';
import Watcher from 'components/Watcher/index';
import './style.scss';
import { jobDetails } from 'data/jobDetails';
import Footer from 'components/Footer';
import JobDescription from './CareersJobs/roles/JobDescription';
import PropTypes from 'prop-types';

export class Careers extends React.Component {
  componentDidMount () {
    const { params } = this.props;
    if (params.jobID) this.openModal(params.jobID);
  }

  shouldComponentUpdate (props) {
    // Don't remount home if the modal is the only change
    if (props.params.jobID !== this.props.params.jobID) {
      return false;
    }
    return true;
  }

  // Using jobID URL param, open or close the modal
  componentWillReceiveProps (props) {
    if (props.params.jobID !== this.props.params.jobID) {
      if (props.params.jobID) {
        this.openModal(props.params.jobID);
      } else {
        this.closeModal();
      }
    }
  }

  openModal (id) {
    const { dispatch } = this.props;
    dispatch(actions.setActiveModal(<JobDescription jobDetail={ jobDetails.find(job => job.id === id) } />, 'job'));
    dispatch(actions.toggleModal(true));
  }

  closeModal () {
    const { dispatch } = this.props;
    dispatch(actions.toggleModal(false));
  }

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
    const careerHero = {
      imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/careers/rs_team.jpg',
      imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/careers/rs_team-tlg.jpg',
      imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/careers/rs_team-mlg.jpg'
    };

    return (
      <div>
        <picture>
          <source srcSet={ careerHero.imgTlg } media="(min-width: 1040px)" />
          <source srcSet={ careerHero.imgMlg } media="(min-width: 767px)" />
          <img src={ careerHero.imgDef } className="hero-image" alt="Redshift Careers" />
        </picture>
        <Watcher
          offset={ { position: 'relative', bottom: '9.7rem' } }
          enterViewport={ (watcher) => this.watcherCallback(watcher) }
          stateChange={ (watcher) => this.watcherCallback(watcher) }
        />
        <section className="row careers--title">
          <h1 className="typ--bold typ--redshift">Join the team.</h1>
        </section>
        <section>
          <div className="row row--maxwidth">
            {
              jobDetails.map((job, index) => (
                <CareersJobs key={ index } job={ job } />
              ))
            }
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

Careers.propTypes = {
  dispatch: PropTypes.func,
  params: PropTypes.object
};

export default connect()(Careers);
