import React from 'react';
import Footer from 'components/Footer';
import NavLinks from './NavLinks';
import './Nav.scss';

export function Nav () {
  const activeURL = window.location.pathname;
  const navLinks = [
    {
      name: 'Work.',
      to: '/'
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
      outgoing: 'https://medium.com/redshift-digital'
    }
  ];

  return (
    <div className="nav theme--dark">
      <div className="row">
        <NavLinks links={ navLinks } activeURL={ activeURL } />
      </div>
      <Footer />
    </div>
  );
};

export default Nav;
