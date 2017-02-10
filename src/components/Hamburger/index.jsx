import React from 'react';
import { connect } from 'react-redux';
import './Hamburger.scss';

export const Hamburger = props => {
  const { modalState, close } = props;

  return (
    <span className={ `icon-hamburger ${(modalState.open && modalState.modalID === 'nav' || close) && 'close-icon'}` }>
      <span />
      <span />
    </span>
  );
};

Hamburger.propTypes = {
  modalState: React.PropTypes.object,
  close: React.PropTypes.bool
};

Hamburger.defaultProps = {
  close: false
};

const injectStateProps = state => ({
  modalState: state.modalState
});

export default connect(injectStateProps)(Hamburger);
