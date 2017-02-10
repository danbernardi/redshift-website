import React from 'react';
import Footer from '../Footer';
import NavLinks from './NavLinks';
import './Nav.scss';

const Nav = () => {
  const navLinks = [
    {
      name: 'Work',
      to: '/work'
    },
    {
      name: 'About',
      to: '/about'
    },
    {
      name: 'Careers',
      to: '/careers'
    },
    {
      name: 'Blog',
      to: 'http://weareredshift.tumblr.com/'
    }
  ];

  return (
    <div className="nav full-height">
      <div className="row">
        <NavLinks links={ navLinks } />
      </div>
      <Footer />
    </div>
  );
};

export default Nav;
