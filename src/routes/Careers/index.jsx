import React from 'react';
import CareersJobs from './CareersJobs';
import * as actions from 'store/actions';
import { connect } from 'react-redux';
import { jobDetails } from 'data/jobDetails';
import Footer from 'components/Footer';
import JobDescription from './CareersJobs/roles/JobDescription';
import PropTypes from 'prop-types';
import { ScrollContainer } from 'scrollmonitor-react';
import { setClass, breakpointIsGreaterThan, breakpointIsLessThan } from 'utils/responsiveHelpers';

import './Careers.scss';

/**
 * The Careers Index Page
 *
 * @param {Object} props
 * @param {function} dispatch             opens correct job modal and sets header theme
 * @param {Object} params                 opens correct modal if user goes directly to url
 * @param {Object} modalState             returns informaiton about the current modal
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

  render () {
    const { modalState, breakpoint } = this.props;
    const careerHero = {
      imgDef: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/careers/desktop/careers_hero.jpg',
      imgTlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/careers/tablet/careers_hero.jpg',
      imgMlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/careers/mobile/careers_hero.jpg'
    };

    return (
      <div
        className={ setClass({ default: 'parallax', mobileLg: 'scroller' }, breakpoint) }
        style={ { width: modalState.windowWidth, height: modalState.windowHeight } }
      >
        <section className="col-12 careers__hero">
          <div className="careers__square--container parallax__group">
            <div className="careers__square parallax__layer--back" />
          </div>
          {
            breakpointIsGreaterThan('tabletSm', breakpoint.size) &&
            <div className="col-6 row careers__title">
              <h1>Join us.</h1>
              <div className="typ--b2">Our studio is a place where passionate, creative people collaborate to solve hard problems. Sound like fun? We are looking for talented people, at all experience levels.</div>
            </div>
          }
          <div className={ setClass({ default: 'col-6 col-last', tabletSm: 'col-10 col-last' }, breakpoint) }>
            <picture>
              <source srcSet={ careerHero.imgTlg } media="(min-width: 1040px)" />
              <source srcSet={ careerHero.imgMlg } media="(min-width: 767px)" />
              <img src={ careerHero.imgDef } className="hero-image" alt="Redshift Careers" />
            </picture>
          </div>
          {
            breakpointIsLessThan('tabletSm', breakpoint.size) &&
            <div className={ `${setClass({ default: 'col-6', tabletSm: 'col-12' }, breakpoint) } row careers__title` }>
              <h1>Join us.</h1>
              <div className="typ--b2">Our studio is a place where passionate, creative people collaborate to solve hard problems. Sound like fun? We are looking for talented people, at all experience levels.</div>
            </div>
          }
        </section>

        <section>
          <div className="careers__group">
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
  breakpoint: PropTypes.object
};

const mapStateToProps = state => ({
  modalState: state.modalState,
  breakpoint: state.breakpoint
});

export default connect(mapStateToProps)(ScrollContainer(Careers));
