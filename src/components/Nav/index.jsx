import React from 'react';
import Footer from '../Footer';
import NavLinks from './NavLinks';
import './Nav.scss';

export function Nav () {
  const activeURL = window.location.pathname;
  const navLinks = [
    {
      name: 'Work.',
      to: '/work'
    },
    {
      name: 'About.',
      to: '/about'
    },
    {
      name: 'Careers.',
      to: '/careers'
    },
    {
      name: 'Blog.',
      outgoing: 'http://weareredshift.tumblr.com/'
    }
  ];

  return (
    <div className="nav full-height theme--dark">
      <div className="row">
        <NavLinks links={ navLinks } activeURL={ activeURL } />
      </div>
      <Footer />
    </div>
  );
};

export default Nav;
