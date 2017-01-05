import React from 'react';
import { connect } from 'react-redux';

import { setOpenDropdownID } from 'store/actions';
import UnconnectedDropdown, { dropdownItemPropType } from './UnconnectedDropdown';

export function Dropdown (props) {
  const { dropID,
          items,
          title,
          dropdowns,
          replaceTitle,
          dispatch,
          className,
          openDropdownID } = props;

  const element = dropdowns.get(dropID);

  const selectedIndexes = element ? element.map(obj => obj.get('index')) : [];

  const open = openDropdownID === dropID;

  const listItems = items.map((item, index) => Object.assign(item, {
    isActive: selectedIndexes.indexOf(index) !== -1
  }));

  const titleIndex = selectedIndexes.size && selectedIndexes.get(0);
  const dropdownTitle = selectedIndexes.size === 1 && replaceTitle
          ? listItems[titleIndex].label
          : title;

  const onTitleClick = () => dispatch(setOpenDropdownID(open ? null : dropID));

  const finalProps = Object.assign({}, props, {
    items: listItems,
    title: dropdownTitle,
    open,
    onTitleClick,
    className
  });

  return (<UnconnectedDropdown { ...finalProps } />);
}

const { bool, string, arrayOf, func, object } = React.PropTypes;
Dropdown.propTypes = {
  items: arrayOf(dropdownItemPropType).isRequired,
  dropID: string.isRequired,

  dropdowns: object.isRequired,
  dispatch: func.isRequired,
  openDropdownID: string,

  replaceTitle: bool,
  title: string,
  className: string
};

Dropdown.defaultProps = {
  title: 'Select One',
  replaceTitle: true
};

const mapStateToProps = state => ({
  dropdowns: state.dropdowns,
  openDropdownID: state.openDropdownID
});

export default connect(mapStateToProps)(Dropdown);
