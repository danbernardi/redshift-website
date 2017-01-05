import React from 'react';
import { connect } from 'react-redux';

import { setOpenDropdownID, setDropdownValues } from 'store/actions';

import Dropdown from '../index.js';

// A basic dropdown, which replaces its title with the selected value
// and stores that value object in global state.
export function SingleDropdown ({ items, dropID, dispatch, className, title }) {
  return (
    <Dropdown
      className={ className }
      dropID={ dropID }
      replaceTitle={ true }
      title={ title }
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
SingleDropdown.propTypes = {
  items: arrayOf(string).isRequired,
  dropID: string.isRequired,
  dispatch: func,
  className: string,
  title: string
};

export default connect()(SingleDropdown);
