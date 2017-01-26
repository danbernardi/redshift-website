import React from 'react';
import Hero from './Hero';
import HomepageCaseStudy from './HomepageCaseStudy';
import Watcher from 'components/Watcher/index';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
import './style.scss';

import { caseStudies } from 'data/caseStudies';
import ArchiveGrid from 'components/Archive/ArchiveGrid';

export class Home extends React.Component {
  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(actions.setHeaderTheme('pink'));
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
            <HomepageCaseStudy key={ index } study={ study } />
          )) }
          <ArchiveGrid />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: React.PropTypes.func
};

export default connect()(Home);
