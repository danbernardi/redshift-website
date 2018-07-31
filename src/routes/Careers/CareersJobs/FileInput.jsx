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
      openDropdown: ''
    };
  }

  _changeHandler = (e) => {
    const { form, files, uploadFileCallback } = this.props;
    this.formGroup.classList.remove('has-error');

    if (form.type === 'file') {
      let moreFiles = files.slice();
      const stateFileName = e.target.files[0].name;
      moreFiles.push(stateFileName);
      if (uploadFileCallback instanceof Function) uploadFileCallback(moreFiles);
      this.setState({ files: moreFiles });
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
    const { openDropdown } = this.state;
    const additionalProps = form.type === 'file'
      ? { multiple: true, id: 'file-input' }
      : {};

    return (
      <div className={ `form__section typ--b1 ${form.classes ? form.classes : ''} ${setClass({ default: 'col-6', tabletMd: 'col-12' }, breakpoint)}` }>
        <div className={ `form__group ${form.formClass}` } ref={ el => { this.formGroup = el; } }>
          { form.type === 'file' &&
            <label
              htmlFor="file-input"
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
              onChange={ this._changeHandler }
            />
          }
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
