import React from 'react';
import * as actions from 'store/actions';
import { connect } from 'react-redux';
import { scrollToID } from 'utils/scrollTo';
import Scene from 'components/Scene';

import CaseStudyModalWrapper from 'components/CaseStudy/CaseStudyModalWrapper';

class CaseStudyTrigger extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    setTimeout(() => {
      this._scrollTarget();
    }, 100);

    this.setScrollTarget = this.setScrollTarget.bind(this);
    window.addEventListener('resize', this.setScrollTarget);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.setScrollTarget);
  }

  _scrollTarget () {
    const target = document.getElementsByClassName('cs__section');

    if (target && target.length) {
      const windowHeight = window.innerHeight;
      const targetHeight = target[0].offsetHeight;
      const targetTopValue = ((targetHeight - windowHeight) / 2) + 'px';
      Array.prototype.forEach.call(target, (div) => {
        div.style.top = `-${targetTopValue}`;
      });
    }
  }

  setScrollTarget () {
    this._scrollTarget();
    this.setState({ break: Math.random() });
  }

  render () {
    const { id, images, caption, dispatch, modalState, index, featuredCaseStudyState } = this.props;
    const openModal = (id) => {
      dispatch(actions.setNextCaseStudy(id, true));
      dispatch(actions.setActiveModal(<CaseStudyModalWrapper />, 'casestudy'));
      dispatch(actions.toggleModal(true));
      scrollToID(id, 500);
    };
    const initialTextStyles = { transition: `opacity 600ms ease-out, transform 600ms ease-in-out` };
    let textTransformStyles = {};

    if (modalState.open || featuredCaseStudyState.activeID !== index) {
      // if modal is currently active
      textTransformStyles = {
        transform: 'translateY(10rem)',
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
        transitionDelay: '0.6s',
        transitionTimingFunction: 'ease-out'
      };
    }

    const initialTransformStyles = { transition: `transform ${featuredCaseStudyState.animate ? '1s' : '0s'} ease-in-out`, top: 0 };
    let transformStyles = {};

    if (featuredCaseStudyState.activeID === index) {
      transformStyles = { transform: 'none' };
    } else if (featuredCaseStudyState.previousIDs.indexOf(index) === -1) {
      transformStyles = { transform: 'translateY(100%)' };
    } else {
      transformStyles = { transform: 'translateY(-100%)' };
    }

    return (
      <section className={ `cs__${id} theme--dark cs__section` } style={ Object.assign(initialTransformStyles, transformStyles) }>
        <div className="scene__container">
          <picture>
            <source srcSet={ images.def } media="(min-width: 1040px)" />
            <source srcSet={ images.tlg } media="(min-width: 767px)" />
            <source srcSet={ images.mlg } media="(min-width: 540px)" />
            <img src={ images.msm } className="homepage-scene--image" alt={ images.alt } />
          </picture>

          <div className="scene__text row" style={ Object.assign(initialTextStyles, textTransformStyles) }>
            <Scene clickCallback={ () => openModal(id) }>
              <h2 className="typ--bold">{ caption.map((caption, index) => (<div key={ index }>{ caption }</div>)) }</h2>
              <h5 className="btn btn--arrow">
                <div className="pt6 pt5--dlg pt3--mlg pt1--msm">
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
