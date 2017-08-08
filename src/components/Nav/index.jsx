import React from 'react';
import Footer from '../Footer';
import NavLinks from './NavLinks';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Nav.scss';

export function Nav ({ modalState }) {
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
    <div className="nav theme--dark" style={ { height: modalState.windowHeight, width: modalState.windowWidth } }>
      <div className="row">
        <NavLinks links={ navLinks } activeURL={ activeURL } />
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  modalState: state.modalState
});

Nav.propTypes = {
  modalState: PropTypes.object
};

export default connect(mapStateToProps)(Nav);
