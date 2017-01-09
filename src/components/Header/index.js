// @flow
import React from 'react';
import { Link } from 'react-router';
import './Header.scss';
import './HeaderClose.scss';

export function Header () {
  return (
    <header className="header">
      <div className="row">
        <div className="layout--left">
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

export default Header;
