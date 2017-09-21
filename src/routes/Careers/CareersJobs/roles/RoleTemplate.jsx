import React from 'react';
import JobContact from '../JobContact';
import ModalCloseBtn from 'components/Modal/ModalCloseBtn';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../../Careers.scss';

/**
 * Job Description Container in Modal
 *
 children: PropTypes.element,
  name: PropTypes.string,
  modalState: PropTypes.object

 * @param {Object} props
 * @param {element} children      content from parent component
 * @param {string} name           job position name from parent
 * @param {Object} modalState     dimensions of current modal

*/

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
            <h2>Apply</h2>
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
