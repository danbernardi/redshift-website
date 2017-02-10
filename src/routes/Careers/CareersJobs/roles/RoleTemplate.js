import React from 'react';
import JobContact from '../JobContact';
import ModalCloseBtn from 'components/Modal/ModalCloseBtn';
import '../../style.scss';

export function RoleTemplate ({ children, name }) {
  return (
    <div className="job--modal">
      <div className="job__sidebar" />
      <ModalCloseBtn />
      <div className="modal__with-sidebar">
        { children }
        <section className="contact__form py8 row">
          <h3 className="pb4">Apply</h3>
          <JobContact position={ name } />
        </section>
      </div>
    </div>
  );
}

const { element, string } = React.PropTypes;
RoleTemplate.propTypes = {
  children: element,
  name: string
};

export default RoleTemplate;
