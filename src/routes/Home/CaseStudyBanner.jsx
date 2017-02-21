import React from 'react';
import ReactDOM from 'react-dom';
import mojs from 'mo-js';
import * as actions from 'store/actions';
import { connect } from 'react-redux';
import Scene from 'components/Scene';
import { Link } from 'react-router';
import { mapRange } from 'utils/animation';
import Watcher from 'components/Watcher';

import CaseStudyModalWrapper from 'components/CaseStudy/CaseStudyModalWrapper';

export class CaseStudyBanner extends React.Component {
  componentDidUpdate () {
    const { activeBannerElement, id, bannerState } = this.props;
    if (activeBannerElement !== undefined && activeBannerElement.classList[0].split('cs__')[1] === id &&
        bannerState.complete.indexOf(id) === -1) {
      this.animateIn();
    }
  }

  animateIn () {
    const { dispatch, id } = this.props;
    const text = ReactDOM.findDOMNode(this.refs.text);

    if (text) {
      new mojs.Tween({
        duration: 300,
        delay: 600,
        easing: 'cubic.out',
        onUpdate: (progress) => {
          const mappedTransform = mapRange(progress, 0, 1, 20, 0);
          text.style.opacity = progress;
          text.style.transform = `translateY(${mappedTransform}px)`;
        },
        onPlaybackComplete: () => dispatch(actions.addBannerToComplete(id))
      }).play();
    }
  }

  openModal (id) {
    const { dispatch } = this.props;
    dispatch(actions.setNextCaseStudy(id, true));
    dispatch(actions.setActiveModal(<CaseStudyModalWrapper />, 'casestudy'));
    dispatch(actions.toggleModal(true));
  };

  watcherCallback (watcher) {
    const { bannerState, id } = this.props;
    if (watcher.isFullyInViewport && bannerState.complete.indexOf(id) === -1) {
      this.animateIn();
    }
  };

  render () {
    const { id, images, caption, onDidMount, bannerState } = this.props;

    let styles;

    if (bannerState.complete.indexOf(id) === -1) {
      styles = { opacity: 0, transform: 'translateY(20px)' };
    } else {
      styles = { opacity: 1, transform: 'translateY(0px)' };
    }

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

          <div className="scene__text row" ref="text" style={ styles }>
            <Link to={ `/work/${id}` }>
              <Watcher
                enterViewport={ (watcher) => this.watcherCallback(watcher) }
                stateChange={ (watcher) => this.watcherCallback(watcher) }
              />
              <Scene clickCallback={ () => this.openModal(id) }>
                <h2 className="typ--bold">
                  { caption.map((caption, index) => (<div key={ index }>{ caption }</div>)) }
                </h2>
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
  index: number,
  onDidMount: func,
  activeBannerElement: object,
  bannerState: object
};

const injectStateProps = state => ({
  bannerState: state.bannerState
});

export default connect(injectStateProps)(CaseStudyBanner);
