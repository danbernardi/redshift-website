import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';
import ModalCloseBtn from './ModalCloseBtn';

const Modal = props => {
  const { modalState } = props;
  const animationTiming = 500;

  const initialStyles = { transition: `transform ${animationTiming}ms ease-in-out` };
  let transformStyles = {};

  if (modalState.open) {
    // if modal is currently active
    transformStyles = { transform: 'none' };
  } else {
    // if modal isn't currently active
    transformStyles = { transform: 'translateX(100%)' };
  }

  return (
    <div className="modal__wrap">
      <ModalCloseBtn animationTiming={ animationTiming } />

      <div className="modal" style={ Object.assign(initialStyles, transformStyles) }>
        { modalState.component && modalState.component }
      </div>
    </div>
  );
};

Modal.propTypes = {
  modalState: React.PropTypes.object
};

const injectStateProps = state => ({
  modalState: state.modalState
});

export default connect(injectStateProps)(Modal);
