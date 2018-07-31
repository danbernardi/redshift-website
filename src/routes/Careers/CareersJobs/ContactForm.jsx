import React from 'react';

import FileInput from './FileInput';
import JobThanks from './JobThanks';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setClass } from 'utils/responsiveHelpers';

/**
 * Contact Form on the Job Modal
 *
 * @param {Object} props
 * @param {string} position       hidden job position form value from parent
 * @return {React.Component}
 */

const formItems = [
  {
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
    formClass: 'form__source',
    type: 'dropdown',
    name: 'from_source',
    items: [
      'Coroflot',
      'Hire Club',
      'LinkedIn',
      'Google search',
      'Referral',
      'Other'
    ]
  }
];

const fileItems = [
  {
    classes: '',
    formClass: 'form__file',
    type: 'file',
    description: 'Upload cover letter',
    name: 'from_coverletter'
  },
  {
    formClass: 'form__file',
    type: 'file',
    description: 'Upload resume',
    name: 'from_resume'
  },
  {
    formClass: 'form__portfolio',
    type: 'text',
    description: 'Link to portfolio',
    name: 'from_portfolio'
  }
];

export class ContactForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      buttonText: 'Submit',
      error: false,
      errorMessage: '',
      source: 'How\'d you hear about us?',
      files: []
    };
  }

  render () {
    const { buttonText, error, errorMessage, source, files } = this.state;
    const { position, breakpoint } = this.props;

    let sourceDescription;

    if (source === 'Referral') {
      sourceDescription = 'Who referred you?';
    } else if (source === 'Other') {
      sourceDescription = 'Tell us more';
    }

    const sourceResponse = {
      classes: 'col-last',
      formClass: 'form__sourceresponse',
      type: 'text',
      description: sourceDescription,
      name: 'from_sourceResponse'
    };

    const onSend = (e) => {
      e.preventDefault();

      const name = this.form.querySelector('.form__name');
      const nameField = name.querySelector('input');
      const email = this.form.querySelector('.form__email');
      const emailField = email.querySelector('input');
      this.setState({ error: false });

      if (!nameField.value.length || !emailField.value.length) {
        if (!nameField.value.length) name.classList.add('has-error');
        if (!emailField.value.length) email.classList.add('has-error');

        this.setState({ error: true, errorMessage: 'Please fill in the required fields.' });
        return;
      }

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

    if (['Referral', 'Other'].indexOf(source) === -1) {
      if (formItems.length === 4) formItems.pop();
    } else {
      formItems[3] = sourceResponse;
    }

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
          { error && <p className="typ--b3 typ--error">{ errorMessage }</p> }
          <input required={ true } type="hidden" value={ position } name="from_position" />
          <div>

            <div className="cf">
              { formItems.map((form, index) => (
                <FileInput key={ form.name + index } form={ form } source={ source } selectSourceCallback={ value => this.setState({ source: value }) } />
              )) }
            </div>

            <div className="cf">
              { fileItems.map((form, index) => (
                <FileInput
                  files={ files }
                  uploadFileCallback={ files => this.setState({ files }) }
                  key={ form.name + index }
                  form={ form }
                  source={ source }
                />
              )) }
            </div>

            <div className="cf mt5">
              { files.length > 0 && <div className="form__section form__group--filename">
                <strong>Files:&nbsp;</strong>
                { files.map((file, index) => {
                  return (
                    <span>{ `${file}${index === files.length - 1 ? '' : ', '}` }</span>
                  );
                }) }
              </div> }
            </div>

            <div className="col-12 job-contact--button">
              <button
                ref={ el => { this.button = el; } }
                className={ 'btn typ--b2 '.concat(setClass({
                  default: 'btn--ghost typ--redshift typ--bold',
                  mobileLg: 'btn--gradient typ--white typ--heavy'
                }, breakpoint)) }
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

ContactForm.propTypes = {
  position: PropTypes.string,
  breakpoint: PropTypes.object
};

const mapStateToProps = state => ({
  breakpoint: state.breakpoint
});

export default connect(mapStateToProps)(ContactForm);
