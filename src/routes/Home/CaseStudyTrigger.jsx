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
    const { id, images, anchor, caption, dispatch, modalState, index, featuredCaseStudyState } = this.props;
    const openModal = (id) => {
      dispatch(actions.setNextCaseStudy(id, true));
      dispatch(actions.setActiveModal(<CaseStudyModalWrapper />, 'casestudy'));
      dispatch(actions.toggleModal(true));
      scrollToID(id, 500);
    };
    const initialTextStyles = { transition: `opacity 300ms ease-in-out` };
    let textTransformStyles = {};

    if (modalState.open) {
      // if modal is currently active
      textTransformStyles = { opacity: 0, pointerEvents: 'none' };
    } else {
      // if modal isn't currently active
      textTransformStyles = { opacity: 1, pointerEvents: 'auto' };
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
        <div id={ id } className="scroll--target" />
        <div className="scene-container layout--absolute">

          <picture>
            <source srcSet={ images.def } media="(min-width: 1040px)" />
            <source srcSet={ images.tlg } media="(min-width: 767px)" />
            <source srcSet={ images.mlg } media="(min-width: 540px)" />
            <img src={ images.msm } className="homepage-scene--image" alt={ images.alt } />
          </picture>

          <div className={ `cs-${id} scene-target` } />
          { anchor && <a name="work" className="scene-target work-anchor" /> }
          <div className="homepage--scene-text" style={ Object.assign(initialTextStyles, textTransformStyles) }>
            <div className="row">
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
        </div>
      </section>
    );
  }
}

const { object, func, string, array, bool, number } = React.PropTypes;
CaseStudyTrigger.propTypes = {
  id: string,
  images: object,
  anchor: bool,
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
