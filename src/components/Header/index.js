// @flow

import React from 'react';
import { IndexLink, Link } from 'react-router';
import './Header.scss';

export function Header () {
  return (
    <div className="row pt6">
      <h1 className="typ--medium typ--center">React Redux Starter Kit</h1>
      <ul className="list--hash typ--center">
        <li>
          <IndexLink to='/' activeClassName='route--active'>
            Home
          </IndexLink>
        </li>
        <li>
          <Link to='/counter' activeClassName='route--active'>
            Counter
          </Link>
        </li>
        <li>
          <Link to='/fractal' activeClassName='route--active'>
            Example Fractal Route
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
