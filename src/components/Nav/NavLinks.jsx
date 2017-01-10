import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'store/actions';

const NavLinks = props => {
  const { dispatch } = props;

  const closeModal = () => {
    dispatch(actions.setActiveModal(null));
  };

  return (
    <ul className="nav__menu list--block">
      {
        navLinks.map((navLink, i) => (
          <li key={ i }><h1>
            <Link className="typ--bold" to={ navLink.to } onClick={ () => closeModal() }>
              { navLink.name }
            </Link>
          </h1></li>
        ))
      }
    </ul>
  );
};

export default connect()(NavLinks);
