import React from 'react';
import * as actions from 'store/actions';
import { connect } from 'react-redux';
import { scrollToID } from 'utils/scrollTo';
import Scene from 'components/Scene';

import CaseStudyModalWrapper from 'components/CaseStudy/CaseStudyModalWrapper';

class CaseStudyTrigger extends React.Component {
  constructor (props) {
    super(props);
    this.state = { animateIn: false };
  }

  componentDidMount () {
    const { index, featuredCaseStudyState } = this.props;

    setTimeout(() => {
      this._scrollTarget();
    }, 100);

    this.setScrollTarget = this.setScrollTarget.bind(this);
    window.addEventListener('resize', this.setScrollTarget);

    if (featuredCaseStudyState.activeID === index) {
      this.triggerAnimateIn();
    }
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.setScrollTarget);
  }

  componentDidUpdate (prevProps) {
    const { index, featuredCaseStudyState } = this.props;
    if (featuredCaseStudyState.activeID === index &&
        prevProps.featuredCaseStudyState.activeID !== featuredCaseStudyState.activeID) {
      this.triggerAnimateIn();
    }
  }

  triggerAnimateIn () {
    this.setState({ animateIn: true });
  }

  _scrollTarget () {
    const target = document.getElementsByClassName('cs__section');

    if (target && target.length) {
      const windowHeight = window.innerHeight;
      const targetHeight = target[0].offsetHeight;
      const targetDiv = document.getElementsByClassName('scrolltarget');
      const targetTopValue = ((targetHeight - windowHeight) / 2) + 'px';
      Array.prototype.forEach.call(targetDiv, (div) => {
        div.style.top = targetTopValue;
      });
    }
  }

  setScrollTarget () {
    this._scrollTarget();
    this.setState({ break: Math.random() });
  }

  render () {
    const { id, images, caption, dispatch, modalState, index } = this.props;
    const { animateIn } = this.state;

    const openModal = (id) => {
      dispatch(actions.setNextCaseStudy(id, true));
      dispatch(actions.setActiveModal(<CaseStudyModalWrapper />, 'casestudy'));
      dispatch(actions.toggleModal(true));
      scrollToID(id, 500);
    };
    const initialTextStyles = { transition: `opacity 400ms ease-out, transform 150ms ease-in-out` };
    let textTransformStyles = {};

    if (modalState.open || !animateIn) {
      // if modal is currently active
      textTransformStyles = {
        transform: 'translateY(5rem)',
        opacity: 0,
        pointerEvents: 'none',
        transitionDelay: '0s'
      };
    } else {
      // if modal isn't currently active
      textTransformStyles = {
        transform: 'none',
        opacity: 1,
        pointerEvents: 'auto',
        transitionDelay: '1s',
        transitionTimingFunction: 'ease-out'
      };
    }

    const initialCTATransformStyles = { transition: `opacity 400ms ease-out` };
    let transformCTAStyles = {};

    if (modalState.open || !animateIn) {
      // if modal is currently active
      transformCTAStyles = {
        opacity: 0,
        pointerEvents: 'none',
        transitionDelay: '0s'
      };
    } else {
      // if modal isn't currently active
      transformCTAStyles = {
        opacity: 1,
        pointerEvents: 'auto',
        transitionDelay: '1.3s',
        transitionTimingFunction: 'ease-out'
      };
    }

    return (
      <section className={ `cs__${id} theme--dark cs__section` }>
        <div className="scene__container">
          <picture>
            <source srcSet={ images.def } media="(min-width: 1040px)" />
            <source srcSet={ images.tlg } media="(min-width: 767px)" />
            <source srcSet={ images.mlg } media="(min-width: 540px)" />
            <img src={ images.msm } className="homepage-scene--image" alt={ images.alt } />
          </picture>

          <div className="scrolltarget" id={ `cs__${index}` } />
          <div className="scene__text row">
            <Scene clickCallback={ () => openModal(id) }>
              <h2 className="typ--bold" style={ Object.assign(initialTextStyles, textTransformStyles) }>
                { caption.map((caption, index) => (<span style={ { display: 'block' } } key={ index }>{ caption }</span>)) }
              </h2>
              <h5 className="btn btn--arrow">
                <div className="pt6 pt5--dlg pt3--mlg pt1--msm" style={ Object.assign(initialCTATransformStyles, transformCTAStyles) }>
                  View project
                  <img
                    src={ require('assets/img/arrow-right-short.png') }
                    alt="Yumavore app design"
                    className="ml2 ml1--msm arrow"
                  />
                </div>
              </h5>
            </Scene>
          </div>
        </div>
      </section>
    );
  }
}

const { object, func, string, array, number } = React.PropTypes;
CaseStudyTrigger.propTypes = {
  id: string,
  images: object,
  caption: array,
  dispatch: func,
  modalState: object,
  featuredCaseStudyState: object,
  index: number
};

const injectStateProps = state => ({
  modalState: state.modalState,
  featuredCaseStudyState: state.featuredCaseStudyState
});

export default connect(injectStateProps)(CaseStudyTrigger);
