// @flow

import React from 'react';
import { IndexLink, Link } from 'react-router';
import './Header.scss';

export function Header () {
  return (
    <div>
      <h1 className="typ--medium">React Redux Starter Kit</h1>
      <div className="col-6">
        <IndexLink to='/' activeClassName='route--active'>
          Home
        </IndexLink>
      </div>
      <div className="col-6 col-last">
        <Link to='/counter' activeClassName='route--active'>
          Counter
        </Link>
      </div>
    </div>
  );
}

export default Header;
