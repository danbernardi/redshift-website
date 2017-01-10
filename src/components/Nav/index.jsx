import React from 'react';
import Footer from '../Footer';
import NavLinks from './NavLinks';
import './Nav.scss';

const Nav = () => (
  <div className="nav full-height">
    <div className="row">
      <NavLinks />
    </div>
    <Footer />
  </div>
);

export default Nav;
