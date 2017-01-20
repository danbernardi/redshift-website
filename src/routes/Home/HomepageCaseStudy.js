import React from 'react';
import ArrowRight from './arrow-right-short.png';
import * as actions from 'store/actions';
import { connect } from 'react-redux';
import { scrollToID } from 'utils/scrollTo';

import CaseStudyModalWrapper from 'components/CaseStudy/CaseStudyModalWrapper';

class HomepageCaseStudy extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    setTimeout(() => {
      this._scrollTarget();
    }, 100);
    window.addEventListener('resize', () => {
      this._scrollTarget();
      this.setState({ break: Math.random() });
    });
  }

  componentWillUnmount () {
    window.removeEventListener('resize', () => {
      this._scrollTarget();
      this.setState({ break: Math.random() });
    });
  }

  _scrollTarget () {
    const windowHeight = window.innerHeight;
    const targetHeight = document.getElementsByClassName('home-section')[0].offsetHeight;
    const targetDiv = document.getElementsByClassName('scroll--target');
    const targetTopValue = ((targetHeight - windowHeight) / 2) + 'px';
    Array.prototype.forEach.call(targetDiv, (div) => {
      div.style.top = targetTopValue;
    });
  }

  _homepageImage () {
    const { study } = this.props;

    if (window.windowSize(this.state.break).isLessThan('mobileSm')) {
      return (
        <img src={ study.homepageMobileImage } className="homepage-scene--image" />
      );
    }
    if (window.windowSize(this.state.break).isLessThan('mobileLg')) {
      return (
        <img src={ study.homepageMLGImage } className="homepage-scene--image" />
      );
    }
    if (window.windowSize(this.state.break).isLessThan('tabletLg')) {
      return (
        <img src={ study.homepageTLGImage } className="homepage-scene--image" />
      );
    }
    if (window.windowSize(this.state.break).isGreaterThan('tabletLg')) {
      return (
        <img src={ study.homepageImage } className="homepage-scene--image" />
      );
    }
  }

  render () {
    const { study, dispatch, modalState } = this.props;
    const openModal = (id) => {
      dispatch(actions.setNextCaseStudy(id, true));
      dispatch(actions.setActiveModal(<CaseStudyModalWrapper />, 'casestudy'));
      dispatch(actions.toggleModal(true));
      scrollToID(id, 500);
    };
    const initialStyles = { transition: `opacity 300ms ease-in-out` };
    let transformStyles = {};

    if (modalState.open) {
      // if modal is currently active
      transformStyles = { opacity: 0, pointerEvents: 'none' };
    } else {
      // if modal isn't currently active
      transformStyles = { opacity: 1, pointerEvents: 'auto' };
    }

    return (
      <section className={ `home-${study.id} flex theme--dark home-section layout--relative` }>
        <div id={ study.id } className="scroll--target" />
        <div className="scene-container layout--absolute">
          { this._homepageImage() }
          <div className={ `cs-${study.id} scene-target` } />
          { study.anchor && <a name="work" className="scene-target work-anchor" /> }
          <div className="homepage--scene-text" style={ Object.assign(initialStyles, transformStyles) }>
            <div className="row">
              <div
                onClick={ () => openModal(study.id) }
                className="scene"
              >
                <h2 className="typ--bold">{ study.caption.map((caption, index) => (<div key={ index }>{ caption }</div>)) }</h2>
                <h5 className="btn btn--arrow">
                  <div className="pt6 pt5--dlg pt3--mlg pt1--msm">
                    View project
                    <img
                      src={ ArrowRight }
                      alt="Yumavore app design"
                      className="ml2 ml1--msm arrow"
                    />
                  </div>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const { object, func } = React.PropTypes;
HomepageCaseStudy.propTypes = {
  study: object,
  dispatch: func,
  modalState: object
};

const injectStateProps = state => ({
  modalState: state.modalState
});

export default connect(injectStateProps)(HomepageCaseStudy);
