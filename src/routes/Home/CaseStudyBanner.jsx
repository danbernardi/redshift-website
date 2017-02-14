import React from 'react';
import * as actions from 'store/actions';
import { connect } from 'react-redux';
import { scrollToID } from 'utils/scrollTo';
import Scene from 'components/Scene';
import { Link } from 'react-router';

import CaseStudyModalWrapper from 'components/CaseStudy/CaseStudyModalWrapper';

class CaseStudyBanner extends React.Component {
  constructor (props) {
    super(props);
    this.state = { animateIn: false };
  }

  render () {
    const { id, images, caption, dispatch, onDidMount } = this.props;

    const openModal = (id) => {
      dispatch(actions.setNextCaseStudy(id, true));
      dispatch(actions.setActiveModal(<CaseStudyModalWrapper />, 'casestudy'));
      dispatch(actions.toggleModal(true));
      scrollToID(id, 500);
    };

    const initialTextStyles = { opacity: 1, transition: `opacity 400ms ease-out, transform 150ms ease-in-out` };
    let textTransformStyles = {};

    const initialCTATransformStyles = { opacity: 1, transition: `opacity 400ms ease-out` };
    let transformCTAStyles = {};

    return (
      <section
        ref={ (el) => onDidMount instanceof Function && onDidMount(el) }
        className={ `cs__${id} theme--dark cs__section` }
      >
        <div className="scene__container">
          <picture>
            <source srcSet={ images.def } media="(min-width: 1040px)" />
            <source srcSet={ images.tlg } media="(min-width: 767px)" />
            <source srcSet={ images.mlg } media="(min-width: 540px)" />
            <img src={ images.msm } className="homepage-scene--image" alt={ images.alt } />
          </picture>

          <div className="scene__text row">
            <Link to={ `/work/${id}` }>
              <Scene clickCallback={ () => openModal(id) }>
                <h2 className="typ--bold" style={ Object.assign(initialTextStyles, textTransformStyles) }>
                  { caption.map((caption, index) => (<div key={ index }>{ caption }</div>)) }
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
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

const { object, func, string, array, number } = React.PropTypes;
CaseStudyBanner.propTypes = {
  id: string,
  images: object,
  caption: array,
  dispatch: func,
  modalState: object,
  featuredCaseStudyState: object,
  index: number,
  onDidMount: func
};

const injectStateProps = state => ({
  modalState: state.modalState,
  featuredCaseStudyState: state.featuredCaseStudyState
});

export default connect(injectStateProps)(CaseStudyBanner);
