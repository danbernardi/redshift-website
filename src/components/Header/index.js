// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import './Header.scss';
import './HeaderClose.scss';

export function Header (props) {
  const { modalState } = props;

  const initialStyles = { transition: `opacity 500ms ease-in-out` };
  let transformStyles = {};

  if (modalState.open) {
    // if modal is currently active
    transformStyles = { opacity: 0, pointerEvents: 'none' };
  } else {
    // if modal isn't currently active
    transformStyles = { opacity: 1, pointerEvents: 'auto' };
  }

  return (
    <header className="header">
      <div className="row">
        <div
          style={ Object.assign(initialStyles, transformStyles) }
          className="layout--left">
          <span className="logo">
            <Link to="/" activeClassName="route--active">
              <span className="icon-redshift pr2" />
            </Link>
          </span>
          <h3 className="page-title" />
        </div>
        <div
          data-target="#menu"
          data-type="nav"
          className="menu__trigger layout--right typ--link"
        >
          <span className="icon-hamburger">
            <span />
            <span />
          </span>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  modalState: React.PropTypes.object
};

const injectStateProps = state => ({
  modalState: state.modalState
});

export default connect(injectStateProps)(Header);
