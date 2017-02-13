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
// import { scrollTo } from 'utils/scrollTo';

import { caseStudies } from 'data/caseStudies';
// import ArchiveGrid from 'components/Archive/ArchiveGrid';
import { onScroll, getScrollDirection } from 'utils/scrollJack';

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
    onScroll(50, (event) => this.onScrollStart(event), () => this.enableScroll());
    if (modal) this.openModal(modal);
  }

  onScrollStart (event) {
    const { modalState, activeBanner } = this.props;

    if (!modalState.open) {
      const index = getScrollDirection(event) === 'down' ? activeBanner + 1 : activeBanner - 1;
      this.scrollToIndex(index);
    }
  }

  scrollToClosestIndex () {
    let doc = document.querySelector('body');
    if (browser.isFirefox) doc = document.querySelector('html');

    if (doc) {
      const closestNumber = getClosestNumber(doc.scrollTop, this.scrollPoints.map(p => p.offsetTop));
      const currentIndex = this.scrollPoints.findIndex(p => { console.log(p.offsetTop); return p.offsetTop === closestNumber });
      this.scrollToIndex(currentIndex);
    }
  }

  enableScroll () {
    const { modalState } = this.props;
    if (!modalState.open) this.html.classList.remove('disable-scroll');
  }

  disableScroll () {
    this.html.classList.add('disable-scroll');
  }

  openModal (id) {
    const { dispatch } = this.props;

    dispatch(actions.setNextCaseStudy(id));
    dispatch(actions.setActiveModal(<CaseStudyModalWrapper />, 'casestudy'));
    dispatch(actions.toggleModal(true));

    const elementIndex = this.getScrollElementIndex(id);
    this.scrollToIndex(elementIndex);
  };

  addScrollPoint (element) {
    if (element && this.scrollPoints.indexOf(element) === -1) this.scrollPoints.push(element);
  }

  getScrollElementIndex (id) {
    return this.scrollPoints.findIndex(p => p.classList.contains(`cs__${id}`));
  }

  scrollToIndex (bannerIndex) {
    const { dispatch } = this.props;

    if (bannerIndex < 0 || bannerIndex >= this.scrollPoints.length) return false;

    dispatch(actions.setActiveBanner(bannerIndex));

    const target = this.scrollPoints[bannerIndex];
    const frameHeight = window.innerHeight;
    const targetCenter = target.offsetTop + (target.offsetHeight / 2);

    this.scrollToPosition(targetCenter - frameHeight / 2);
  }

  scrollToPosition (targetScrollPosition) {
    const scrollStartPosition = window.scrollY;
    this.disableScroll();

    const duration = Math.abs(targetScrollPosition - scrollStartPosition) / 2;
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

  getScrollElementCenter (element) {
    return element.offsetTop - (element.offsetHeight / 2);
  }

  render () {
    //Get featured case studies for home page display
    const featuredCSBanners = caseStudies.filter(cs => cs.featured).map((study, index) => (
      <CaseStudyBanner
        index={ index }
        key={ index }
        { ...study }
        onDidMount={ this.addScrollPoint.bind(this) }
      />
    ));

    return (
      <div>
        <Hero
          onDidMount={ this.addScrollPoint.bind(this) }
          clickCallback={ this.scrollToIndex.bind(this) }
        />
        <div id="homepage-work">
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
  activeBanner: React.PropTypes.number
};

const injectStateProps = state => ({
  featuredCaseStudyState: state.featuredCaseStudyState,
  modalState: state.modalState,
  activeBanner: state.activeBanner
});

export default connect(injectStateProps)(Home);
