import React from 'react';
import JobContact from '../JobContact';
import '../../style.scss';

export function RoleTemplate ({ children, name }) {
  return (
    <div>
      { children }
      <section>
        <div className="contact__form py8">
          <div className="row">
            <h3 className="pb4">Apply</h3>
            <JobContact position={ name } />
          </div>
        </div>
      </section>
    </div>
  );
}

const { element, string } = React.PropTypes;
RoleTemplate.propTypes = {
  children: element,
  name: string
};

export default RoleTemplate;
