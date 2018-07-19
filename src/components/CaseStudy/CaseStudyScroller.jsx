import React from 'react';
import { Link, browserHistory } from 'react-router';
import CaseStudySection from './CaseStudySection';
import { ScrollContainer } from 'scrollmonitor-react';
import CaseStudyHeader from './CaseStudyHeader';
import PropTypes from 'prop-types';
import GSAP from 'react-gsap-enhancer';
import { connect } from 'react-redux';
import { TweenLite } from 'gsap';
import { toggleModal, setActiveModal } from 'store/actions';
import Watcher from 'components/Watcher';

/**
* Container for Case Study Content
*
* @extends React.Component
* @param {Object} caseStudyContent    Content of the current case study
* @param {Object} nextStudyState      Next case study
* @param {Object} scrollContainer     Case study section passed to the Watcher
* @param {Object} modalState          dimensions of the modal
* @param {function} dispatch          open and close the correct modal
* @returns {React.Component}          Returns a react component
*
*/

export class CaseStudyScroller extends React.Component {

  animateScroll (container, position) {
    TweenLite.to(container, 0.5, { scrollTop: position });
  }

  routeTo (route) {
    const { dispatch } = this.props;
    browserHistory.push(route);

    dispatch(toggleModal(false));
    const timing = setTimeout(() => {
      dispatch(setActiveModal(null, null));
      clearInterval(timing);
    }, 300);
  }

  animateTriggerIn () {
    TweenLite.to(this.trigger, 0.6, { opacity: 0.3 });
  }

  animateTriggerOut () {
    TweenLite.to(this.trigger, 0.6, { opacity: 0 });
  }

  watcherCallback = (watcher) => {
    if (watcher.isFullyInViewport) this.animateTriggerIn();
    if (watcher.isAboveViewport) this.animateTriggerOut();
  };

  render () {
    const { caseStudyContent, scrollContainer, modalState } = this.props;
    let { nextCaseStudy } = this.props;

    if (!nextCaseStudy || typeof nextCaseStudy !== 'object') {
      nextCaseStudy = {
        id: '/about',
        color: '#FF2953',
        name: 'About Redshift',
        subtext: 'Learn more about us'
      };
    }

    return (
      <section
        ref={ (el) => { this.casestudy = el; } }
        className={ `modal__with-sidebar ${caseStudyContent.id}` }
        style={ { height: modalState.windowHeight, width: modalState.windowWidth } }
      >
        <div className="modal__content layout--relative">
          <div className="row">
            <div className="modal__title typ--light typ--b2" ref={ (el) => { this.name = el; } }>{ caseStudyContent.name }</div>
          </div>

          <Watcher
            autoStart={ false }
            stateChange={ this.watcherCallback }
            enterViewport={ this.watcherCallback }
            scrollContainer={ scrollContainer }
          />

          <div className="row">
            <div className="casestudy__heading layout--fullheight">
              <CaseStudyHeader
                content={ caseStudyContent.heading }
                color={ caseStudyContent.color }
              />
              <div
                ref={ el => { this.trigger = el; } }
                className="casestudy__scrollarrow"
                onClick={ () => { this.animateScroll(this.casestudy, window.innerHeight); } }
              >
                <img src="https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/scroll-arrow.svg" alt="Scroll down" />
              </div>
            </div>
          </div>

          { caseStudyContent.content && caseStudyContent.content.length &&
            caseStudyContent.content.map((section, index) => (
              <CaseStudySection
                key={ index }
                caseStudyContent={ section }
                scrollContainer={ scrollContainer }
                container={ this.casestudy }
              />
            ))
           }

          <Link
            onClick={ () => nextCaseStudy.id === '/about' && this.routeTo(nextCaseStudy.id) }
            to={ nextCaseStudy.id === '/about' ? nextCaseStudy.id : `/work/${nextCaseStudy.id}` }
            style={ {
              display: 'block',
              bottom: 0,
              height: 'auto',
              opacity: 1,
              borderColor: nextCaseStudy.color
            } }
            className="casestudy__next"
          >
            <div className="layout--relative">
              <div className="row">
                <span
                  className="casestudy__next__label typ--light typ--b2"
                  style={ { overflow: 'hidden', display: 'block' } }
                >{ nextCaseStudy.subtext ? nextCaseStudy.subtext : 'View next project' }</span>
                <h2
                  className="casestudy__next__name typ--bold"
                  style={ { color: nextCaseStudy.color } }
                >{ nextCaseStudy.name }</h2>
              </div>
            </div>
          </Link>
        </div>
      </section>
    );
  }
}

CaseStudyScroller.propTypes = {
  caseStudyContent: PropTypes.object,
  nextCaseStudy: PropTypes.object,
  scrollContainer: PropTypes.object,
  modalState: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = state => ({
  modalState: state.modalState
});

export default connect(mapStateToProps)(ScrollContainer(GSAP()(CaseStudyScroller)));
