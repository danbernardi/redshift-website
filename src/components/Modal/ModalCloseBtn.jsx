import React from 'react';
import * as actions from 'store/actions';
import { connect } from 'react-redux';

const ModalCloseBtn = props => {
  const { animationTiming, dispatch, modalState } = props;

  const closeModal = () => {
    dispatch(actions.toggleModal(false));
    this.setTimeout(() => {
      dispatch(actions.setActiveModal(null));
    }, animationTiming);
  };

  const initialStyles = { transition: `opacity ${animationTiming}ms ease-in-out` };
  let transformStyles = {};

  if (modalState.open) {
    // if modal is currently active
    transformStyles = { opacity: 1, pointerEvents: 'auto' };
  } else {
    // if modal isn't currently active
    transformStyles = { opacity: 0, pointerEvents: 'none' };
  }

  return (
    <div
      style={ Object.assign(initialStyles, transformStyles) }
      className="modal__close" onClick={ () => closeModal() }>
      <span className="icon-close" />
    </div>
  );
};

ModalCloseBtn.propTypes = {
  modalState: React.PropTypes.object,
  dispatch: React.PropTypes.func,
  animationTiming: React.PropTypes.bool
};

const injectStateProps = state => ({
  modalState: state.modalState
});

export default connect(injectStateProps)(ModalCloseBtn);
