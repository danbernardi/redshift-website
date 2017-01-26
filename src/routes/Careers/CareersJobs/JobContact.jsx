import React from 'react';

import JobContactForm from './JobContactForm';
import JobThanks from './JobThanks';

const formItems = [
  {
    classes: '',
    formClass: 'form__name',
    type: 'text',
    description: 'Name',
    name: 'from_name',
    required: true
  },
  {
    classes: 'col-last',
    formClass: 'form__email',
    type: 'email',
    description: 'Email',
    name: 'from_email',
    required: true
  },
  {
    classes: '',
    formClass: 'form__portfolio',
    type: 'text',
    description: 'Link to Portfolio',
    name: 'from_portfolio',
    required: true
  },
  {
    classes: 'col-last',
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
    const { position } = this.props;

    const onSend = (e) => {
      e.preventDefault();
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

    if (buttonText === 'Sent') {
      return <JobThanks />;
    } else {
      return (
        <form
          id="rs-contact-03"
          encType="multipart/form-data"
          method="post"
          className={ `apply-form ${name.split(' ').map(s => s.toLowerCase()).join('-') }` }
          ref={ el => { this.form = el; } }
        >
          <input type="hidden" value={ position } name="from_position" />
          <div>
            {
              formItems.map((form, index) => (
                <JobContactForm key={ index } form={ form } />
              ))
            }
            <div className="col-12 pt8 pt4--msm">
              <button
                ref={ el => { this.button = el; } }
                className="btn btn--ghost typ--jobs"
                onClick={ e => { onSend(e); } }
              >
                { buttonText }
              </button>
            </div>
          </div>
        </form>
      );
    }
  }
};

const { string } = React.PropTypes;
JobContact.propTypes = {
  position: string
};

export default JobContact;
