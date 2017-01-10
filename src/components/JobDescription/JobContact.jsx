import React from 'react';

import JobContactForm from './JobContactForm';

const formItems = [
  {
    class: 'pb6--tmd',
    formClass: 'form__name',
    type: 'text',
    description: 'Name',
    name: 'from_name',
    required: true
  },
  {
    formClass: 'form__email',
    type: 'email',
    description: 'Email',
    name: 'from_email',
    required: true
  },
  {
    formClass: 'form__portfolio',
    type: 'text',
    description: 'Link to Portfolio',
    name: 'from_portfolio',
    required: true
  },
  {
    formClass: 'form__attach',
    type: 'file',
    description: 'attachment',
    name: 'resume'
  }
];

export class JobContact extends React.Component {
  constructor (props) {
    super(props);
    this.state = { buttonText: 'Send' };
  }

  render () {
    const { buttonText } = this.state;

    const onSend = () => {
      const serviceID = 'default_service';
      const templateID = 'template_GPu7g1GL';

      this.setState({ buttonText: 'Sending...' });
      window.emailjs.sendForm(serviceID, templateID, this.form)
        .then(() => {
          this.setState({ buttonText: 'Sent' });
        }, err => {
          console.error('Send email failed!\r\n Response:\n ' + JSON.stringify(err));
          this.setState({ buttonText: 'Failed' });
        });
    };

    return (
      <div ref={ el => { this.form = el; } }>
        {
          formItems.map((form, index) => (
            <JobContactForm key={ index } form={ form } />
          ))
        }
        <div className="col-12 pt8">
          <button
            ref={ el => { this.button = el; } }
            className="btn typ--jobs"
            onClick={ onSend }
          >
            { buttonText }
          </button>
        </div>
      </div>
    );
  }
};

export default JobContact;
