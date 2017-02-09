import React from 'react';
import Hero from './Hero';
import CaseStudyTrigger from './CaseStudyTrigger';
import Watcher from 'components/Watcher/index';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
import { scrollToID } from 'utils/scrollTo';
import Footer from 'components/Footer';
import './style.scss';

import { caseStudies } from 'data/caseStudies';
// import ArchiveGrid from 'components/Archive/ArchiveGrid';
import { onScroll, getScrollDirection } from 'utils/scrollJack';

export class Home extends React.Component {
  componentDidMount () {
    const { dispatch } = this.props;

    const html = document.getElementsByTagName('html');
    if (html && html[0]) { html[0].classList.add('disable-scroll'); }
    dispatch(actions.setHeaderTheme('pink'));

    onScroll((e) => this.scrollHandler(e), 100);
  }

  componentDidUpdate (prevProps) {
    const { featuredCaseStudyState, modalState } = this.props;

    if (prevProps.featuredCaseStudyState.activeID !== featuredCaseStudyState.activeID ||
        (prevProps.modalState.open === true && modalState.open === false)) {
      setTimeout(() => scrollToID(`cs__${featuredCaseStudyState.activeID}`, 1000), 200);
    }
  }

  scrollHandler (event) {
    const { dispatch, featuredCaseStudyState, modalState } = this.props;

    if (!modalState.open) {
      const activeCaseStudyID = featuredCaseStudyState.activeID;
      const featuredCaseStudies = caseStudies.filter(item => item.featured);
      let nextCSIndex;

      // determines whether the scroll event was a down scroll or an up scroll
      const direction = getScrollDirection(event);

      if (activeCaseStudyID >= featuredCaseStudies.length - 1 && direction === 'down') {
        // if scroll down while already at the last case study
        nextCSIndex = activeCaseStudyID;
      } else if (activeCaseStudyID <= -1 && direction === 'up') {
        // if scroll up while already at the hero section
        nextCSIndex = activeCaseStudyID;
      } else if (direction === 'down') {
        // if scroll under any other circumstance
        nextCSIndex = activeCaseStudyID + 1;
        dispatch(actions.goToNextCaseStudy(nextCSIndex));
      } else if (direction === 'up') {
        nextCSIndex = activeCaseStudyID - 1;
        dispatch(actions.revertToPreviousCaseStudy(nextCSIndex));
      }
    }
  }

  watcherCallback (watcher) {
    const { dispatch } = this.props;

    if (watcher.isAboveViewport) {
      // watcher is in view
      dispatch(actions.setHeaderTheme('white'));
    }

    if (watcher.isFullyInViewport) {
      // watcher is partly out of view
      dispatch(actions.setHeaderTheme('pink'));
    }
  };

  render () {
    return (
      <div>
        <Hero />
        <div id="homepage-work">
          <Watcher
            offset={ { bottom: '8.5rem' } }
            enterViewport={ (watcher) => this.watcherCallback(watcher) }
            stateChange={ (watcher) => this.watcherCallback(watcher) }
          />
          { caseStudies.filter(item => item.featured).map((study, index) => (
            <CaseStudyTrigger index={ index } key={ index } { ...study } />
          )) }
        </div>
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: React.PropTypes.func,
  featuredCaseStudyState: React.PropTypes.object,
  modalState: React.PropTypes.object
};

const injectStateProps = state => ({
  featuredCaseStudyState: state.featuredCaseStudyState,
  modalState: state.modalState
});

export default connect(injectStateProps)(Home);
