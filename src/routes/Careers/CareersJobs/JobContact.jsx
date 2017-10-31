import React from 'react';

import JobContactForm from './JobContactForm';
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
    description: 'Link to portfolio',
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
    this.state = { buttonText: 'Submit', error: false, errorMessage: '' };
  }

  render () {
    const { buttonText, error, errorMessage } = this.state;
    const { position, breakpoint } = this.props;

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
          <input type="hidden" value={ position } name="from_position" />
          <div>
            {
              formItems.map((form, index) => (
                <JobContactForm key={ index } form={ form } />
              ))
            }
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

JobContact.propTypes = {
  position: PropTypes.string,
  breakpoint: PropTypes.object
};

const mapStateToProps = state => ({
  breakpoint: state.breakpoint
});

export default connect(mapStateToProps)(JobContact);
