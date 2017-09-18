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
import { ScrollContainer } from 'scrollmonitor-react';

/**
 * The Careers Index Page
 *
 * @param {Object} props
 * @param {func} dispatch                 opens correct job modal and sets header theme
 * @param {Object} params                opens correct modal if user goes directly to url
 * @param {Object} modalState             returns informaiton about the current modal
 * @param {Object} scrollContainer        a prop for the watcher to fire the animation at the right time
 * @return {React.Component}
 */

export class Careers extends React.Component {
  componentDidMount () {
    const { params } = this.props;
    if (params.jobID) this.openModal(params.jobID);

    if (window.emailjs) return;

    const script = document.createElement('script');
    const body = document.getElementsByTagName('body')[0];

    script.src = 'https://cdn.emailjs.com/dist/email.min.js';
    script.type = 'text/javascript';

    body.appendChild(script);

    this.initEmailjs();
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

  // Keep trying to initialize until two seconds have passed
  initEmailjs (attempt = 0) {
    if (attempt >= 15) {
      console.error('Failed to initialize emailjs!');
      return;
    }

    setTimeout(() => {
      if (window.emailjs) {
        window.emailjs.init('user_6TiXPRNCY6MhiuslNSu0v');
      } else {
        this.initEmailjs(attempt + 1);
      }
    }, 300);
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
    const { modalState, scrollContainer } = this.props;
    const careerHero = {
      imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/careers/default/rs_team.jpg',
      imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/careers/tablet/rs_team.jpg',
      imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/careers/mobile/rs_team.jpg'
    };

    return (
      <div className="scroller" style={ { width: modalState.windowWidth, height: modalState.windowHeight } }>
        <picture>
          <source srcSet={ careerHero.imgTlg } media="(min-width: 1040px)" />
          <source srcSet={ careerHero.imgMlg } media="(min-width: 767px)" />
          <img src={ careerHero.imgDef } className="hero-image" alt="Redshift Careers" />
        </picture>
        <Watcher
          autoStart={ false }
          offset={ { position: 'relative', bottom: '9.7rem' } }
          enterViewport={ (watcher) => this.watcherCallback(watcher) }
          stateChange={ (watcher) => this.watcherCallback(watcher) }
          scrollContainer={ scrollContainer }
        />
        <section className="row careers--title">
          <h1 className="typ--bold rs--gradienttext">Join our team.</h1>
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
  params: PropTypes.object,
  modalState: PropTypes.object,
  scrollContainer: PropTypes.object
};

const mapStateToProps = state => ({
  modalState: state.modalState
});

export default connect(mapStateToProps)(ScrollContainer(Careers));
