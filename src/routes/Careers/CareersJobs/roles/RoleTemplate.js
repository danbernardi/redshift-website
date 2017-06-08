import React from 'react';
import JobContact from '../JobContact';
import ModalCloseBtn from 'components/Modal/ModalCloseBtn';
import { browserHistory } from 'react-router';
import '../../style.scss';
import PropTypes from 'prop-types';

export function RoleTemplate ({ children, name }) {
  return (
    <div className="job--modal">
      <div className="job__sidebar" />
      <ModalCloseBtn closeCallback={ () => browserHistory.push('/careers') } />
      <div className="modal__with-sidebar bg--white">
        { children }
        <section className="contact__form py8 row">
          <h3 className="pb4">Apply</h3>
          <JobContact position={ name } />
        </section>
      </div>
    </div>
  );
}

RoleTemplate.propTypes = {
  children: PropTypes.element,
  name: PropTypes.string
};

export default RoleTemplate;
