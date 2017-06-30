// @flow
import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import './Header.scss';
import './HeaderClose.scss';
import * as actions from 'store/actions';
import Nav from 'components/Nav/index';
import { scrollDocToZero } from 'utils/scrollTo';
import Hamburger from 'components/Hamburger';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';
import GSAP from 'react-gsap-enhancer';
import { TimelineMax } from 'gsap';

export class Header extends React.Component {
  componentDidMount () {
    if (location.pathname === '/') {
      this.timeline = this.addAnimation(this.animateIn);
    }
  }

  animateIn ({ target }) {
    const logo = target[0].querySelector('.header__logo');
    const menu = target[0].querySelector('.menu__trigger');

    return new TimelineMax({})
      .staggerFrom([logo, menu], 0.55, { delay: 1.5, opacity: 0, y: -50 }, 0.15)
      .play();
  }

  getPageTitle (path) {
    return {
      work: { label: 'work', color: 'white' },
      about: { label: 'about', color: 'pink' },
      careers: { label: 'careers', color: '' },
      '404': { label: '404', color: 'white' }
    }[path || 'work'];
  };

  triggerRouteChange () {
    const { modalState, dispatch } = this.props;

    let animate = true;
    if (modalState.open || (location.pathname !== '/' && location.pathname.split('/')[1] !== '/work')) {
      browserHistory.push('/');
      scrollDocToZero();

      dispatch(actions.toggleModal(false));

      setTimeout(() => {
        dispatch(actions.setActiveModal(null, null));
      }, 200);

      animate = false;
    }

    dispatch(actions.goToNextCaseStudy(-1, animate, []));
  };

  toggleHeaderModal () {
    const { modalState, dispatch } = this.props;
    console.log(modalState.open);
    if (modalState.open) {
      dispatch(actions.toggleModal(false));
      this.timer = setTimeout(() => { dispatch(actions.setActiveModal(null, null)); }, 200);
    } else {
      dispatch(actions.setActiveModal(<Nav />, 'nav'));
      dispatch(actions.toggleModal(true));
      ReactGA.event({
        category: 'Navigation',
        action: 'Hamburger Click'
      });
    }
  };

  componentWillUnmount () {
    window.clearInterval(this.timer);
  }

  render () {
    const { modalState, headerTheme } = this.props;

    const initialStyles = { transition: `opacity 200ms ease-in-out` };
    let logoTransformStyles = {};

    if (modalState.open && modalState.modalID !== 'nav') {
      // if modal is currently active
      logoTransformStyles = { opacity: 0, pointerEvents: 'none' };
    } else {
      // if modal isn't currently active
      logoTransformStyles = { opacity: 1, pointerEvents: 'auto' };
    }

    return (
      <header className={ `header ${headerTheme}-theme` }>
        <div className="row">
          <div
            onClick={ () => this.triggerRouteChange() }
            style={ Object.assign(initialStyles, logoTransformStyles) }
            className="header__logo layout--left"
            >
            <span className="logo">
              <span
                className="icon-redshift pr2"
                style={ { color: modalState.open && modalState.modalID === 'nav' && '#FFFFFF' } }
              />
            </span>
          </div>
          <div
            style={ Object.assign(initialStyles, logoTransformStyles) }
            onClick={ () => this.toggleHeaderModal() }
            className="menu__trigger layout--right typ--link"
          >
            <Hamburger />
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  modalState: PropTypes.object,
  headerTheme: PropTypes.string,
  dispatch: PropTypes.func
};

const injectStateProps = state => ({
  modalState: state.modalState,
  headerTheme: state.headerTheme
});

export default connect(injectStateProps)(GSAP()(Header));
