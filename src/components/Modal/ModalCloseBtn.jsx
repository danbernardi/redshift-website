import React from 'react';
import * as actions from 'store/actions';
import { connect } from 'react-redux';
import Hamburger from 'components/Hamburger';

const ModalCloseBtn = props => {
  const { animationTiming, dispatch, modalState, closeCallback } = props;

  const closeModal = () => {
    dispatch(actions.toggleModal(false));
    const timing = setTimeout(() => {
      dispatch(actions.setActiveModal(null, null));
      clearInterval(timing);
    }, 200);

    if (closeCallback instanceof Function) closeCallback();
  };

  const initialStyles = { transition: `opacity ${animationTiming}ms ease-in-out` };
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
  modalState: React.PropTypes.object,
  dispatch: React.PropTypes.func,
  animationTiming: React.PropTypes.number,
  closeCallback: React.PropTypes.func
};

ModalCloseBtn.defaultProps = {
  animationTiming: 200
};

const injectStateProps = state => ({
  modalState: state.modalState
});

export default connect(injectStateProps)(ModalCloseBtn);
