import React from 'react';
import * as actions from 'store/actions';
import { connect } from 'react-redux';
import Hamburger from 'components/Hamburger';
import PropTypes from 'prop-types';

/**
* Modal CLose Button on modals
*
* @param {object} props
* @param {object} modalState          returns information about current modal
* @param {func} dispatch              connects window dimensions
* @param {func} closeCallback         track browser history from parent
* @returns {React.Component}          Returns a react component
*
*/

export function ModalCloseBtn (props) {
  const { dispatch, modalState, closeCallback } = props;

  function closeModal () {
    dispatch(actions.toggleModal(false));
    const timing = setTimeout(() => {
      dispatch(actions.setActiveModal(null, null));
      clearInterval(timing);
    }, 200);

    if (closeCallback instanceof Function) closeCallback();
  };

  const initialStyles = { transition: "opacity 200ms ease-in-out" };
  let transformStyles = {};

  if (modalState.open && modalState.modalID !== 'nav') {
    // if modal is currently active
    transformStyles = { opacity: 1, pointerEvents: 'auto' };
  } else {
    // if modal isn't currently active
    transformStyles = { opacity: 0, pointerEvents: 'none' };
  }

  return (
    <div
      style={ Object.assign(initialStyles, transformStyles) }
      className="modal__close row" onClick={ () => closeModal() }>
      <Hamburger close={ true } />
    </div>
  );
};

ModalCloseBtn.propTypes = {
  modalState: PropTypes.object,
  dispatch: PropTypes.func,
  animationTiming: PropTypes.number,
  closeCallback: PropTypes.func
};

const injectStateProps = state => ({
  modalState: state.modalState
});

export default connect(injectStateProps)(ModalCloseBtn);
