import React from 'react';
import classNames from 'classnames';
import './styles.scss';

// What all other dropdowns boil down to -- a bunch of HTML with all functionality passed in
export function UnconnectedDropdown (props) {
  const { items, classes, title, open, onTitleClick } = props;

  return (
    <div className={ classNames([open && 'is-open', classes, 'dropdown']) }>
      <div className="dropdown__toggle" onClick={ onTitleClick }>
        <span className="dropdown__title">{ title }</span>
        <span className="dropdown__icon" />
      </div>
      { open &&
        <div className="dropdown__menu">
          <ul className="list--block">
            {
              items.map((item, index) => (
                <li
                  className={ classNames([item.isActive && 'is-active', classes, 'dropdown__item']) }
                  key={ index }
                  onClick={ () => item.action([{ index, value: item.value }]) }
                >
                  { item.label }
                </li>
              ))
            }
          </ul>
        </div>
      }
    </div>
  );
}

const { bool, string, arrayOf, shape, any, func } = React.PropTypes;

export const dropdownItemPropType = shape({
  label: string.isRequired,
  value: any,
  action: func.isRequired,
  classes: string,
  isActive: bool
});

UnconnectedDropdown.propTypes = {
  items: arrayOf(dropdownItemPropType).isRequired,
  title: string.isRequired,
  onTitleClick: func.isRequired,
  open: bool,
  classes: string
};

export default UnconnectedDropdown;
