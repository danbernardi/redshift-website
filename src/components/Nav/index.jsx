import React from 'react';
import Footer from '../Footer';
import { Link } from 'react-router';
import './Nav.scss';

const navLinks = [
  { name: 'Work', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Careers', to: '/careers' }
];

const NavLinksMap = () => (
  <ul className="nav__menu list--block">
    {
      navLinks.map((navLink, i) => (
        <li key={ i }><h1>
          <Link className="typ--bold" to={ navLink.to }>
            { navLink.name }
          </Link>
        </h1></li>
      ))
    }
  </ul>
);

export function Nav () {
  return (
    <div className="nav full-height">
      <div className="row">
        <NavLinksMap />
      </div>
      <Footer />
    </div>
  );
}

export default Nav;
