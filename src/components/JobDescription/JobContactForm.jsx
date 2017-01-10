import React from 'react';
import AttachmentImage from './attachment.png';

export function JobContactForm ({ form }) {
  return (
    <div>
      <div className={ `${form.class} col-6 col-12--tmd` }>
        <div className={ `form__group ${form.formClass}` }>
          {
            form.type === 'file'
              ? <label htmlFor="file-input" name="attachment" >Attachments{ /* AttachmentImage */ }</label>
              : null
          }
          <input
            type={ form.type }
            placeholder={ form.description }
            name={ form.name }
            value={ form.value }
            // onChange={ event => { onChange(form.description, event.target.value); } }
            // onBlur={ `if (this.value=='') this.value = ${form.formValue}` }
            // onFocus={ `if (this.value==${form.formValue}) this.value = ''` }
            className={ form.required ? 'required' : null }
          />
        </div>
      </div>
    </div>
  );
}

const { object, func } = React.PropTypes;
JobContactForm.propTypes = {
  form: object,
  onChange: func
};

export default JobContactForm;
