import React from 'react';
import AttachmentImage from './attachment.png';
import PropTypes from 'prop-types';

export class JobContactForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { fileName: [] };
  }

  _changeHandler (e) {
    let moreFiles = this.state.fileName.slice();
    const stateFileName = e.target.files[0].name;
    moreFiles.push(stateFileName + ' ');
    this.setState({ fileName: moreFiles });
    console.log(moreFiles);
  }

  render () {
    const { form } = this.props;
    const { fileName } = this.state;
    const additionalProps = form.type === 'file'
      ? { multiple: true, id: 'file-input' }
      : {};

    return (
      <div className={ `${form.classes} col-6 col-12--tmd` }>
        <div className={ `form__group mb6 mb4--msm ${form.formClass}` }>
          {
            form.type === 'file'
              ? <label htmlFor="file-input" name="attachment" >Attachments <img src={ AttachmentImage } alt="Add a file attachment" /></label>
              : null
          }
          <input
            type={ form.type }
            placeholder={ form.description }
            name={ form.name }
            value={ form.value }
            className={ form.required ? 'required' : null }
            { ...additionalProps }
            onChange={ form.type === 'file' ? this._changeHandler.bind(this) : null }
          />
        </div>
        { fileName && <div className="form__group--filename">{ fileName }</div> }
      </div>
    );
  }
}

JobContactForm.propTypes = {
  form: PropTypes.object
};

export default JobContactForm;
