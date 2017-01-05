import React from 'react';
import { connect } from 'react-redux';

import { setOpenDropdownID, setDropdownValues } from 'store/actions';

import Dropdown from '../index.js';

// A demo dropdown, which replaces its title with the selected value
export function SimpleDropdown ({ items, dropID, dispatch }) {
  return (
    <Dropdown
      dropID={ dropID }
      items={
        items.map(item => Object.assign(item, {
          action: (values) => {
            dispatch(setOpenDropdownID(null));
            dispatch(setDropdownValues(dropID, values));
          },
          label: item,
          value: item
        }))
      }
    />
  );
};

const { arrayOf, string, func } = React.PropTypes;
SimpleDropdown.propTypes = {
  items: arrayOf(string).isRequired,
  dropID: string.isRequired,
  dispatch: func
};

export default connect()(SimpleDropdown);
