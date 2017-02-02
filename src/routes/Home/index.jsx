import React from 'react';
import Hero from './Hero';
import CaseStudyTrigger from './CaseStudyTrigger';
import Watcher from 'components/Watcher/index';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
import './style.scss';

import { caseStudies } from 'data/caseStudies';
// import ArchiveGrid from 'components/Archive/ArchiveGrid';
import { onScroll, getScrollDirection, getSwipeDirection } from 'utils/scrollJack';

export class Home extends React.Component {
  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(actions.setHeaderTheme('pink'));
    onScroll((e) => this.scrollHandler(e), 60);
    getSwipeDirection();
  }

  scrollHandler (event) {
    const { dispatch, featuredCaseStudyState } = this.props;
    const activeCaseStudyID = featuredCaseStudyState.activeID;
    const featuredCaseStudies = caseStudies.filter(item => item.featured);
    let nextCSIndex;

    // determines whether the scroll event was a down scroll or an up scroll
    const direction = event.type === 'touchmove' ? window.touchEventYDirection : getScrollDirection(event);

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
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: React.PropTypes.func,
  featuredCaseStudyState: React.PropTypes.object
};

const injectStateProps = state => ({
  featuredCaseStudyState: state.featuredCaseStudyState
});

export default connect(injectStateProps)(Home);
