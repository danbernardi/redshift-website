import React from 'react';
import Hero from './Hero';
import CaseStudyBanner from './CaseStudyBanner';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
import Footer from 'components/Footer';
import CaseStudyModalWrapper from 'components/CaseStudy/CaseStudyModalWrapper';
import './style.scss';
import * as browser from 'utils/browserTests';
import { mapRange } from 'utils/animation';
import mojs from 'mo-js';
import { getClosestNumber } from 'utils/closestNumber';
import { caseStudies } from 'data/caseStudies';
import { onScroll, getScrollDirection } from 'utils/scrollJack';
import Watcher from 'components/Watcher';

export class Home extends React.Component {
  constructor (props) {
    super(props);
    this.scrollPoints = [];
    this.state = {
      bannerIndex: 0
    };

    this.html = document.getElementsByTagName('html')[0];
  }

  componentDidMount () {
    const { dispatch, modal } = this.props;
    dispatch(actions.setHeaderTheme('pink'));

    // timeout of 1 waits for body to return correct scrollTop
    if (!modal) setTimeout(() => this.scrollToClosestIndex(), 200);
    onScroll(40, (event) => this.onScrollStart(event), () => this.enableScroll());
    if (modal) this.openModal(modal);
  }

  // Deteremines scroll direction and navigates to next or previous scrollPoint
  onScrollStart (event) {
    const { modalState, bannerState } = this.props;

    if (!modalState.open) {
      const index = getScrollDirection(event) === 'down' ? bannerState.active + 1 : bannerState.active - 1;
      this.scrollToIndex(index);
    }
  }

  // Scrolls to the closest scrollPoint to the current page scroll value
  scrollToClosestIndex () {
    let doc = document.querySelector('body');
    if (browser.isFirefox) doc = document.querySelector('html');

    if (doc) {
      const closestNumber = getClosestNumber(doc.scrollTop, this.scrollPoints.map(p => p.offsetTop));
      const currentIndex = this.scrollPoints.findIndex(p => p.offsetTop === closestNumber);
      this.scrollToIndex(currentIndex);
    }
  }

  // enables free page scrolling
  enableScroll () {
    const { modalState } = this.props;
    if (!modalState.open) this.html.classList.remove('disable-scroll');
  }

  // disables free page scrolling
  disableScroll () {
    this.html.classList.add('disable-scroll');
  }

  // opens a case study modal depending on id
  openModal (id) {
    const { dispatch } = this.props;

    dispatch(actions.setNextCaseStudy(id));
    dispatch(actions.setActiveModal(<CaseStudyModalWrapper />, 'casestudy'));
    dispatch(actions.toggleModal(true));

    const elementIndex = this.getScrollElementIndex(id);
    this.scrollToIndex(elementIndex);
  };

  // adds a scrollPoint element to this.scrollPoints
  addScrollPoint (element) {
    if (element && this.scrollPoints.indexOf(element) === -1) this.scrollPoints.push(element);
  }

  // returns index of this.scrollPoints element that matches id
  getScrollElementIndex (id) {
    return this.scrollPoints.findIndex(p => p.classList.contains(`cs__${id}`));
  }

  // scrolls to the scrollPoint that matches passed index
  scrollToIndex (bannerIndex) {
    const { dispatch } = this.props;

    if (bannerIndex < 0 || bannerIndex >= this.scrollPoints.length) return false;

    dispatch(actions.setActiveBanner(bannerIndex));

    const target = this.scrollPoints[bannerIndex];
    const frameHeight = window.innerHeight;
    const targetCenter = target.offsetTop + (target.offsetHeight / 2);

    this.scrollToPosition(targetCenter - frameHeight / 2);
  }

  // animates page scrolling to a specific location
  scrollToPosition (targetScrollPosition) {
    const scrollStartPosition = window.scrollY;
    this.disableScroll();

    // const duration = Math.abs(targetScrollPosition - scrollStartPosition) / 3;
    const duration = 600;
    new mojs.Tween({
      duration,
      easing: 'cubic.out',
      onUpdate: (progress) => {
        const pos = mapRange(progress, 0, 1, scrollStartPosition, targetScrollPosition);
        window.scrollTo(0, pos);
      },
      onPlaybackComplete: () => this.enableScroll()
    }).play();
  }

  // returns offset center of passed element in relation to viewport height
  getScrollElementCenter (element) {
    return element.offsetTop - (element.offsetHeight / 2);
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
    const { bannerState } = this.props;

    //Get featured case studies for home page display
    const featuredCSBanners = caseStudies.filter(cs => cs.featured).map((study, index) => (
      <CaseStudyBanner
        index={ index }
        key={ index }
        { ...study }
        onDidMount={ this.addScrollPoint.bind(this) }
        activeBannerElement={ this.scrollPoints[bannerState.active] }
      />
    ));

    return (
      <div>
        <Hero
          onDidMount={ this.addScrollPoint.bind(this) }
          clickCallback={ this.scrollToIndex.bind(this) }
        />
        <div id="homepage-work">
          <Watcher
            offset={ { bottom: '8.5rem' } }
            enterViewport={ (watcher) => this.watcherCallback(watcher) }
            stateChange={ (watcher) => this.watcherCallback(watcher) }
          />
          { featuredCSBanners }
        </div>
        <Footer onDidMount={ this.addScrollPoint.bind(this) } />
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: React.PropTypes.func,
  featuredCaseStudyState: React.PropTypes.object,
  modalState: React.PropTypes.object,
  modal: React.PropTypes.string,
  bannerState: React.PropTypes.object
};

const injectStateProps = state => ({
  featuredCaseStudyState: state.featuredCaseStudyState,
  modalState: state.modalState,
  bannerState: state.bannerState
});

export default connect(injectStateProps)(Home);
