import React from 'react';
import Hero from './Hero';
import CaseStudyBanner from './CaseStudyBanner';
import Watcher from 'components/Watcher/index';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
import { scrollToID } from 'utils/scrollTo';
import Footer from 'components/Footer';
import CaseStudyModalWrapper from 'components/CaseStudy/CaseStudyModalWrapper';
import './style.scss';
import * as browser from 'utils/browserTests';

import mojs from 'mo-js';

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
  }

  componentDidMount () {
    const { dispatch, modal } = this.props;

    const html = document.getElementsByTagName('html');
    if (html && html[0]) { html[0].classList.add('disable-scroll'); }
    dispatch(actions.setHeaderTheme('pink'));
    onScroll((e) => this.scrollHandler(e), 100);

    if (modal) this.openModal(modal);
  }

  openModal (id) {
    const { dispatch } = this.props;

    dispatch(actions.setNextCaseStudy(id));
    dispatch(actions.setActiveModal(<CaseStudyModalWrapper />, 'casestudy'));
    dispatch(actions.toggleModal(true));

    setTimeout(() => { scrollToID(`cs__${id}`, 500); }, 200);
  };

  componentDidUpdate (prevProps) {
    const { featuredCaseStudyState, modalState } = this.props;
  }

  addScrollPoint (element) {
    this.scrollPoints.push(element);
  }

  scrollToIndex (bannerIndex) {
    if (bannerIndex < 0 || bannerIndex >= this.scrollPoints.length) {
      return;
    }

    this.setState({ bannerIndex }, () => {
      const target = this.scrollPoints[bannerIndex];
      const frameHeight = window.innerHeight;
      const targetCenter = target.offsetTop - (target.offsetHeight / 2);

      this.scrollToPosition(targetCenter - frameHeight / 2);
    });
  }

  scrollToPosition (targetScrollPosition) {

    const scrollStartPosition = window.scrollY;

    const duration = Math.abs(targetScrollPosition - scrollStartPosition) / 2;
    new mojs.Tween({
      duration,
      easing: 'cubic.out',
      onUpdate: (progress) => {
        const pos = this.mapRange(progress, 0, 1, scrollStartPosition, targetScrollPosition);
        window.scrollTo(0, pos);
      }
    }).play();


    // window.scrollTo(0, scrollPosition);
  }

  mapRange (value, inMin, inMax, outMin, outMax) {
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }


  getScrollElementCenter (element) {
    return element.offsetTop - (element.offsetHeight / 2);
  }

  scrollToID (id, duration = 200) {
    const elem = document.getElementById(id);

    let scrollDoc = 'body';
    if (browser.isFirefox) scrollDoc = 'html';

    const doc = document.getElementsByTagName(scrollDoc)[0];

    const start = doc.scrollTop;
    const end = elem.getBoundingClientRect().top + start;

    new mojs.Tween({
      duration,
      easing: 'cubic.inout',
      onUpdate: (progress) => { doc.scrollTop = start + (end - start) * progress; }
    }).play();
  }

  render () {
    //Get featured case studies for home page display
    const featuredCaseStudies = caseStudies.filter(item => item.featured).map((study, index) => {
      return (
        <CaseStudyBanner
          index={ index }
          key={ index }
          { ...study }
          onDidMount={ this.addScrollPoint.bind(this) }
        />
      );
    });


    return (
      <div>
        <div style={ { position: 'fixed', top: 0, left: 0, zIndex: 1000 } }>
          <button onClick={ () => { console.log('teset'); this.scrollToIndex(this.state.bannerIndex + 1); } }>Next Banner</button>
          <button onClick={ () => { this.scrollToIndex(this.state.bannerIndex - 1); } }>Prev Banner</button>
        </div>
        <Hero />
        <div id="homepage-work">
          { featuredCaseStudies }
        </div>
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: React.PropTypes.func,
  featuredCaseStudyState: React.PropTypes.object,
  modalState: React.PropTypes.object,
  modal: React.PropTypes.string
};

const injectStateProps = state => ({
  featuredCaseStudyState: state.featuredCaseStudyState,
  modalState: state.modalState
});

export default connect(injectStateProps)(Home);
