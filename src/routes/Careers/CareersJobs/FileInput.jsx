import React from 'react';
import { setClass } from 'utils/responsiveHelpers';
import { connect } from 'react-redux';
import { Dropdown } from 'components/Dropdown';
import PropTypes from 'prop-types';

/**
 * Contact Form Content on the Job Modal
 *
 * @param {Object} props
 * @param {Object} form           form data from parent
 * @param {Object} breakpoint     checks browser width
 * @return {React.Component}
*/

export class FileInput extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      openDropdown: '',
      files: []
    };

    // this._changeHandler = this._changeHandler.bind(this);
  }

  changeHandler = (e) => {
    const { form, uploadFileCallback } = this.props;
    const { files } = this.state;
    this.formGroup.classList.remove('has-error');

    if (form.type === 'file') {
      let moreFiles = files.slice();

      Array.from(e.target.files).forEach(file => {
        moreFiles.push(file.name);
      });

      this.setState({ files: moreFiles });
      // if (uploadFileCallback instanceof Function) uploadFileCallback(moreFiles);
    }
  }

  dropdownItemClickHandler (value) {
    this.setState({ openDropdown: '' });
    if (this.props.selectSourceCallback instanceof Function) {
      this.props.selectSourceCallback(value);
    }
  }

  render () {
    const { form, breakpoint, source } = this.props;
    const { openDropdown, files } = this.state;
    const additionalProps = form.type === 'file'
      ? { multiple: true, id: form.name }
      : {};

    return (
      <div className={ `form__section typ--b1 ${form.classes ? form.classes : ''} ${setClass({ default: 'col-6', tabletMd: 'col-12' }, breakpoint)}` }>
        <div className={ `form__group ${form.formClass}` } ref={ el => { this.formGroup = el; } }>
          { form.type === 'file' &&
            <label
              htmlFor={ form.name }
              name={ form.description }>
                { form.description } <img src="https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/paperclip.svg" alt={ form.description }
              />
            </label>
          }

          { form.type === 'dropdown'
            ? <Dropdown
              open={ openDropdown === 'source' }
              selectedValue={ source }
              toggleClickCallback={ () => this.setState({ openDropdown: openDropdown === 'source' ? '' : 'source' }) }
              itemClickCallback={ (value) => this.dropdownItemClickHandler(value) }
              items={ form.items }
              id={ form.name }
            />
            : <input
              type={ form.type }
              placeholder={ form.description }
              name={ form.name }
              value={ form.value }
              className={ `typ--b1 typ--light ${form.required ? 'required' : '' }` }
              { ...additionalProps }
              onChange={ (event) => this.changeHandler(event) }
            />
          }

          <div className="cf">
            { files.length > 0 && <div className="form__section form__group--filename">
              <strong>Files:&nbsp;</strong>
              { files.map((file, index) => {
                return (
                  <span key={ index }>{ `${file}${index === files.length - 1 ? '' : ', '}` }</span>
                );
              }) }
            </div> }
          </div>
        </div>
      </div>
    );
  }
}

FileInput.propTypes = {
  form: PropTypes.object,
  breakpoint: PropTypes.object,
  selectSourceCallback: PropTypes.func,
  source: PropTypes.string,
  uploadFileCallback: PropTypes.func,
  files: PropTypes.array
};

const mapStateToProps = state => ({
  breakpoint: state.breakpoint
});

export default connect(mapStateToProps)(FileInput);
