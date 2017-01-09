import React from 'react';
import JobContactForm from './JobContactForm';

const JobContactFormItems = [
  {
    class: 'pb6--tmd',
    formClass: 'form__name',
    type: 'text',
    formValue: 'Name',
    name: 'from_name',
    required: true
  },
  {
    formClass: 'form__email',
    type: 'email',
    formValue: 'Email',
    name: 'from_email',
    required: true
  },
  {
    formClass: 'form__portfolio',
    type: 'text',
    formValue: 'Link to Portfolio',
    name: 'from_portfolio',
    required: true
  },
  {
    formClass: 'form__attach',
    type: 'file',
    name: 'resume'
  }
];

const JobContact = () => (
  <div>
    {
      JobContactFormItems.map((form, index) => (
        <JobContactForm key={ index } form={ form } />
      ))
    }
    <div className="col-12 pt8">
      <button className="btn typ--jobs">Send</button>
    </div>
  </div>
);

export default JobContact;
