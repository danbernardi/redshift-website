import React from 'react';
import JobContact from '../JobContact';
import ModalCloseBtn from 'components/Modal/ModalCloseBtn';
import { browserHistory } from 'react-router';
import '../../style.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export function RoleTemplate ({ children, name, modalState }) {
  return (
    <div className="job--modal">
      <ModalCloseBtn closeCallback={ () => browserHistory.push('/careers') } />
      <div
        className="modal__sidebar"
        style={ { backgroundColor: '#FF2953' } }
      />
      <div
        className="modal__with-sidebar bg--white"
        style={ { borderColor: '#FF2953', height: modalState.windowHeight, width: modalState.windowWidth } }
      >
        <div className="modal__content">
          { children }
          <section className="contact__form py8 row">
            <h3 className="pb4">Apply</h3>
            <JobContact position={ name } />
          </section>
        </div>
      </div>
    </div>
  );
}

RoleTemplate.propTypes = {
  children: PropTypes.element,
  name: PropTypes.string,
  modalState: PropTypes.object
};

const mapStateToProps = state => ({
  modalState: state.modalState
});

export default connect(mapStateToProps)(RoleTemplate);
