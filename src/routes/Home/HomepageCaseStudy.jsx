import React from 'react';
import * as actions from 'store/actions';
import { connect } from 'react-redux';
import { scrollToID } from 'utils/scrollTo';
import Scene from 'components/Scene';

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

    this.setScrollTarget = this.setScrollTarget.bind(this);
    window.addEventListener('resize', this.setScrollTarget);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.setScrollTarget);
  }

  _scrollTarget () {
    const target = document.getElementsByClassName('home-section');

    if (target && target.length) {
      const windowHeight = window.innerHeight;
      const targetHeight = target[0].offsetHeight;
      const targetDiv = document.getElementsByClassName('scroll--target');
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
      <section className={ `home-${study.id} theme--dark home-section layout--relative` }>
        <div id={ study.id } className="scroll--target" />
        <div className="scene-container layout--absolute">

          <picture>
            <source srcSet={ study.homepageImage } media="(min-width: 1040px)" />
            <source srcSet={ study.homepageTLGImage } media="(min-width: 767px)" />
            <source srcSet={ study.homepageMLGImage } media="(min-width: 540px)" />
            <img src={ study.homepageMobileImage } className="homepage-scene--image" alt={ study.id } />
          </picture>

          <div className={ `cs-${study.id} scene-target` } />
          { study.anchor && <a name="work" className="scene-target work-anchor" /> }
          <div className="homepage--scene-text" style={ Object.assign(initialStyles, transformStyles) }>
            <div className="row">
              <Scene clickCallback={ () => openModal(study.id) }>
                <h2 className="typ--bold">{ study.caption.map((caption, index) => (<div key={ index }>{ caption }</div>)) }</h2>
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
