import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Hamburger.scss';

/**
  * Hamburger - Header Menu
  *
  * @param {Object} props
  * @param {Object} modalState          returns information about current modal
  * @param {boolean} close              close modal
  * @param {string} color               String defining color of the hamburger spans
  * @returns {func}                     Returns a function
*/

export function Hamburger (props) {
  const { modalState, close, color } = props;
  const spanStyles = {};

  if (color) {
    spanStyles.backgroundColor = color;
  }

  return (
    <a
      href="javascript:void(0)"
      className={ `icon-hamburger ${(modalState.open && modalState.modalID === 'nav' || close) && 'close-icon'}` }
    >
      <span style={ spanStyles } />
      <span style={ spanStyles } />
    </a>
  );
};

Hamburger.propTypes = {
  modalState: PropTypes.object,
  close: PropTypes.bool,
  color: PropTypes.string
};

Hamburger.defaultProps = {
  close: false
};

const injectStateProps = state => ({
  modalState: state.modalState
});

export default connect(injectStateProps)(Hamburger);
