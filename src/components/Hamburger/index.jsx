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
  * @returns {func}                     Returns a function
*/

export function Hamburger (props) {
  const { modalState, close } = props;

  return (
    <a
      href="javascript:void(0)"
      className={ `icon-hamburger ${(modalState.open && modalState.modalID === 'nav' || close) && 'close-icon'}` }
    >
      {/* TODO update to route when modals are routable */}
      <span />
      <span />
    </a>
  );
};

Hamburger.propTypes = {
  modalState: PropTypes.object,
  close: PropTypes.bool
};

Hamburger.defaultProps = {
  close: false
};

const injectStateProps = state => ({
  modalState: state.modalState
});

export default connect(injectStateProps)(Hamburger);
