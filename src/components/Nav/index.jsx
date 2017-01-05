import React from 'react';
import Footer from '../Footer';
import './Nav.scss';

const navLinks = [
  {
    name: 'work',
    url: 'index.html#work'
  },
  {
    name: 'about',
    url: 'about.html'
  },
  {
    name: 'careers',
    url: 'careers.html'
  }
];

const NavLinksMap = () => (
  <ul className='nav__menu list--block'>
    {
      navLinks.map((navLink, i) => (
        <li key={ i }>
          <h1>
            <a id={ `${navLink.name}_link` } className='typ--bold' href={ navLink.url }>
              { navLink.name }
            </a>
          </h1>
        </li>
      ))
    }
  </ul>
);

export function Nav () {
  return (
    <div id='menu' className='modal current nav full-height'>
      <div className='row'>
        <NavLinksMap />
      </div>
      <Footer />
    </div>
  );
}

export default Nav;
