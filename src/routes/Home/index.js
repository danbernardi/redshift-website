import React from 'react';
import Hero from './Hero';
import HomepageCaseStudy from './HomepageCaseStudy';
import Watcher from 'components/Watcher/index';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
import './style.scss';

import NortonImage from './Norton/norton-scene-bg.jpg';
import NortonTLGImage from './Norton/norton-scene-bg-tlg.jpg';
import NortonMLGImage from './Norton/norton-scene-bg-mlg.jpg';
import NortonMobileImage from './Norton/norton-scene-bg-mobile.jpg';

import YumavoreImage from './Yumavore/yumavore-scene-bg.jpg';
import YumavoreTLGImage from './Yumavore/yumavore-scene-bg-tlg.jpg';
import YumavoreMLGImage from './Yumavore/yumavore-scene-bg-mlg.jpg';
import YumavoreMobileImage from './Yumavore/yumavore-scene-bg-mobile.jpg';

import NexusImage from './Nexus/nexus-scene-bg.jpg';
import NexusTLGImage from './Nexus/nexus-scene-bg-tlg.jpg';
import NexusMLGImage from './Nexus/nexus-scene-bg-mlg.jpg';
import NexusMobileImage from './Nexus/nexus-scene-bg-mobile.jpg';

import FiveImage from './Five/five-scene-bg.jpg';
import FiveTLGImage from './Five/five-scene-bg-tlg.jpg';
import FiveMLGImage from './Five/five-scene-bg-mlg.jpg';
import FiveMobileImage from './Five/five-scene-bg-mobile.jpg';

import CSNorton from './Norton/CSNorton';
import CSYumavore from './Yumavore/CSYumavore';
import CSNexus from './Nexus/CSNexus';
import CSFive from './Five/CSFive';

import ArchiveGrid from 'components/Archive/ArchiveGrid';

const caseStudies = [
  {
    id: 'norton',
    homepageImage: NortonImage,
    homepageTLGImage: NortonTLGImage,
    homepageMLGImage: NortonMLGImage,
    homepageMobileImage: NortonMobileImage,
    imageAlt: 'Norton creative design',
    caption1: 'A single interface',
    caption2: 'for all things Norton',
    anchor: true,
    component: <CSNorton />
  },
  {
    id: 'yumavore',
    homepageImage: YumavoreImage,
    homepageTLGImage: YumavoreTLGImage,
    homepageMLGImage: YumavoreMLGImage,
    homepageMobileImage: YumavoreMobileImage,
    imageAlt: 'Yumavore app design',
    caption1: 'A new way to create',
    caption2: 'and share recipes',
    anchor: false,
    component: <CSYumavore />
  },
  {
    id: 'nexus',
    homepageImage: NexusImage,
    homepageTLGImage: NexusTLGImage,
    homepageMLGImage: NexusMLGImage,
    homepageMobileImage: NexusMobileImage,
    imageAlt: 'Nexus product website',
    caption1: 'A new home',
    caption2: 'for Google Nexus',
    anchor: false,
    component: <CSNexus />
  },
  {
    id: 'five',
    homepageImage: FiveImage,
    homepageTLGImage: FiveTLGImage,
    homepageMLGImage: FiveMLGImage,
    homepageMobileImage: FiveMobileImage,
    imageAlt: 'Redshift Five App',
    caption1: 'Share and compare',
    caption2: 'your top 5 of anything',
    anchor: false,
    component: <CSFive />
  }

];

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
          <Watcher offset={ { bottom: '8.5rem' } } stateChange={ (watcher) => this.watcherCallback(watcher) } />
          {
            caseStudies.map((study, index) => (
              <HomepageCaseStudy key={ index } study={ study } />
            ))
          }
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
