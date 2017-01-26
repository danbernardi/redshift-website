import React from 'react';
import { connect } from 'react-redux';
import { map } from 'react-immutable-proptypes';

import { setCheckboxValue } from 'store/actions';

export function Checkbox ({ boxID, name, dispatch, checkboxes }) {
  const checked = checkboxes.get([boxID]);
  return (
    <label className="checkable" htmlFor={ boxID }>
      <input
        className="checkable__input"
        type="checkbox"
        onChange={ () => {
          dispatch(setCheckboxValue(boxID, !checked));
        } }
        name={ name }
        checked={ checked }
      />
      <span className="checkable__mark" />
      <span className="checkable__label">{ name }</span>
    </label>
  );
};

const mapStateToProps = state => ({
  checkboxes: state.checkboxes
});

const { string, func } = React.PropTypes;
Checkbox.propTypes = {
  boxID: string.isRequired,
  name: string.isRequired,
  checkboxes: map,
  dispatch: func
};

export default connect(mapStateToProps)(Checkbox);