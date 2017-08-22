import React from 'react';
import { setClass } from 'utils/responsiveHelpers';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/**
 * Contact Form Content on the Job Modal
 *
 * @param {object} props
 * @param {object} form           form data from parent
 * @param {object} breakpoint     checks browser width
 * @return {React.Component}
*/

export class JobContactForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { fileName: [] };
  }

  _changeHandler (e) {
    const { form } = this.props;
    this.formGroup.classList.remove('has-error');

    if (form.type === 'file') {
      let moreFiles = this.state.fileName.slice();
      const stateFileName = e.target.files[0].name;
      moreFiles.push(stateFileName + ' ');
      this.setState({ fileName: moreFiles });
    }
  }

  render () {
    const { form, breakpoint } = this.props;
    const { fileName } = this.state;
    const additionalProps = form.type === 'file'
      ? { multiple: true, id: 'file-input' }
      : {};

    return (
      <div className={ `typ--b1 ${form.classes} ${setClass({ default: 'col-6', tabletMd: 'col-12' }, breakpoint)}` }>
        <div className={ `form__group ${form.formClass}` } ref={ el => { this.formGroup = el; } }>
          {
            form.type === 'file'
              ? <label htmlFor="file-input" name="attachment" >Attach resume <img src={ 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/paperclip.svg' } alt="Add a file attachment" /></label>
              : null
          }
          <input
            type={ form.type }
            placeholder={ form.description }
            name={ form.name }
            value={ form.value }
            className={ `typ--b1 typ--light ${form.required ? 'required' : null }` }
            { ...additionalProps }
            onChange={ this._changeHandler.bind(this) }
          />
        </div>
        { fileName && <div className="form__group--filename">{ fileName }</div> }
      </div>
    );
  }
}

JobContactForm.propTypes = {
  form: PropTypes.object,
  breakpoint: PropTypes.object
};

const mapStateToProps = state => ({
  breakpoint: state.breakpoint
});

export default connect(mapStateToProps)(JobContactForm);
