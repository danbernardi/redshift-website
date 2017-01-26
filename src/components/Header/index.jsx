// @flow
import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import './Header.scss';
import './HeaderClose.scss';
import * as actions from 'store/actions';
import Nav from 'components/Nav/index';

export class Header extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      logoHovered: false
    };
  }

  getPageTitle (path) {
    return {
      work: { label: 'work', color: 'white' },
      about: { label: 'about', color: '' },
      careers: { label: 'careers', color: '' }
    }[path || 'work'];
  };

  triggerRouteChange () {
    const { modalState, dispatch } = this.props;

    browserHistory.push('/');
    const body = document.getElementsByTagName('body');
    if (body && body[0]) { body[0].scrollTop = 0; }

    if (modalState.open) {
      dispatch(actions.toggleModal(false));

      setTimeout(() => {
        dispatch(actions.setActiveModal(null, null));
      }, 200);
    }
  };

  toggleHeaderModal () {
    const { modalState, dispatch } = this.props;

    if (modalState.open) {
      dispatch(actions.toggleModal(false));
      this.timer = setTimeout(() => { dispatch(actions.setActiveModal(null, null)); }, 200);
    } else if (!modalState.modalID) {
      dispatch(actions.setActiveModal(<Nav />, 'nav'));
      dispatch(actions.toggleModal(true));
    }
  };

  componentWillUnmount () {
    window.clearInterval(this.timer);
  }

  render () {
    const { modalState, headerTheme } = this.props;
    const { logoHovered } = this.state;

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
            onMouseEnter={ () => this.setState({ logoHovered: true }) }
            onMouseLeave={ () => this.setState({ logoHovered: false }) }
            onClick={ () => this.triggerRouteChange() }
            style={ Object.assign(initialStyles, logoTransformStyles) }
            className={ `header__logo layout--left ${logoHovered ? 'hovered' : ''}` }>
            <span className="logo">
              <span
                className="icon-redshift pr2"
                style={ { color: modalState.open && modalState.modalID === 'nav' && '#4a4a4a' } }
              />
            </span>
            <h3
              className="page-title"
              style={ { color: modalState.open && modalState.modalID === 'nav'
                ? 'white'
                : this.getPageTitle(location.pathname.replace('/', '')).color } }>
              { logoHovered
                ? 'redshift'
                : null
              }
            </h3>
          </div>
          <div
            style={ Object.assign(initialStyles, logoTransformStyles) }
            onClick={ () => this.toggleHeaderModal() }
            className="menu__trigger layout--right typ--link"
          >
            <span className={ `icon-hamburger ${modalState.open && modalState.modalID === 'nav' && 'close-icon'}` }>
              <span />
              <span />
            </span>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  modalState: React.PropTypes.object,
  headerTheme: React.PropTypes.string,
  dispatch: React.PropTypes.func,
  pathname: React.PropTypes.string
};

const injectStateProps = state => ({
  modalState: state.modalState,
  headerTheme: state.headerTheme
});

export default connect(injectStateProps)(Header);