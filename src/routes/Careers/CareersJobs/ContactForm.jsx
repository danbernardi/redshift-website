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

// Gets all inputs in tree below node
const getInputs = node => {
  let inputs = [];
  const childNodes = node.childNodes;
  for (let i = 0; i < childNodes.length; i++) {
    const child = childNodes[i];
    if (child.tagName === 'INPUT') {
      inputs.push(child);
    } else {
      inputs = [...inputs, ...getInputs(child)];
    }
  }
  return inputs;
};

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
      '',
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
    name: 'from_coverletter',
    multiple: true
  },
  {
    formClass: 'form__file',
    type: 'file',
    description: 'Upload resume',
    name: 'from_resume',
    multiple: true,
    required: true
  },
  {
    formClass: 'form__portfolio',
    type: 'text',
    description: 'Link to portfolio',
    name: 'from_portfolio',
    required: true
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

      this.setState({ error: false });
      const jsFormItems = [...formItems, ...fileItems];
      const inputs = getInputs(this.form).filter(input => input.name !== 'from_position');

      const requiredInputs = inputs.filter(input => jsFormItems.find(item => item.name === input.name).required);
      const emptyRequiredInputs = requiredInputs.filter(input => input.value.length === 0);

      if (emptyRequiredInputs.length) {
        emptyRequiredInputs.forEach(input => input.parentElement.classList.add('has-error'));

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
                <FileInput key={ index } form={ form } source={ source } selectSourceCallback={ value => this.setState({ source: value }) } />
              )) }
            </div>

            <div className="cf">
              { fileItems.map((form, index) => (
                <FileInput
                  files={ files }
                  uploadFileCallback={ files => this.setState({ files }) }
                  key={ index }
                  form={ form }
                  source={ source }
                />
              )) }
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
