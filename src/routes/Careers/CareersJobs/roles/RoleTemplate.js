import React from 'react';
import JobContact from '../JobContact';
import JobThanks from '../JobThanks';
import '../../style.scss';

export function RoleTemplate ({ children, name }) {
  return (
    <div>
      { children }
      <section>
        <div className="contact__form py8">
          <div className="row">
            <h3 className="pb4">Apply</h3>
            <div
              id="rs-contact-03"
              encType="multipart/form-data"
              method="post"
              className={ `apply-form ${name.split(' ').map(s => s.toLowerCase()).join('-') }` }
            >
              <input type="hidden" value={ name } name="from_position" />
              <JobContact />
            </div>
            <JobThanks />
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
