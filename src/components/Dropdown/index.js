import React, { Component } from 'react';
import { string, array, func, bool } from 'prop-types';
import './Dropdown.scss';

export class Dropdown extends Component {
  render () {
    const { id, selectedValue, items, itemClickCallback, toggleClickCallback, open } = this.props;

    return (
      <div className={ `dropdown ${open ? 'is-open' : ''}` }>
        <div className="dropdown__toggle" onClick={ () => toggleClickCallback instanceof Function && toggleClickCallback(!open) }>
          { selectedValue }
        </div>

        <ul className="dropdown__menu">
          { items.map((item, index) => (
            <li onClick={ () => itemClickCallback instanceof Function && itemClickCallback(item) } key={ index }>{ item }</li>
          )) }
        </ul>

        <select name={ id } className="dropdown__shadow">
          { items.map((item, index) => (
            <option key={ index } value={ item } selected={ selectedValue === item }>{ item }</option>
          )) }
        </select>
      </div>
    );
  }
}

Dropdown.propTypes = {
  selectedValue: string,
  items: array,
  itemClickCallback: func,
  toggleClickCallback: func,
  open: bool,
  id: string
};

export default Dropdown;
