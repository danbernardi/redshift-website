import React from 'react';
import { connect } from 'react-redux';
import { map } from 'react-immutable-proptypes';
import classNames from 'classnames';
import { setRadioValue } from 'store/actions';

// import './styles.scss'; // TODO: Reinstate -- causing problems

export function RadioGroup ({ groupID, className, items, radios, dispatch }) {
  const selectedValue = radios.getIn([groupID, 'value']);

  const onCheck = (item) => {
    dispatch(setRadioValue(groupID, item));
  };

  const fullItems = items.map((item, index) => {
    let fullItem;

    if (typeof item === 'string') {
      fullItem = {
        name: item,
        value: item,
        index
      };
    } else {
      fullItem = Object.assign({}, item, { index });
    }
    return fullItem;
  });

  return (
    <ul className={ classNames('list--block', className) }>
      {
        fullItems.map(item => (
          <li key={ item.index } onClick={ () => { onCheck(item); } }>
            <label className="checkable" htmlFor={ item.value }>
              <input
                className="checkable__input"
                type="radio"
                checked={ selectedValue === item.value }
                onChange={ () => {} }
                id={ groupID }
                name={ item.name }
                value={ item.value }
              />
              <span className="checkable__mark" />
              <span className="checkable__label">{ item.name }</span>
            </label>
          </li>
        ))
      }
    </ul>
  );
}

const { arrayOf, string, func, oneOfType, shape } = React.PropTypes;
RadioGroup.propTypes = {
  items: arrayOf(
    oneOfType([
      shape({
        name: string,
        value: string.isRequired
      }),
      string
    ]).isRequired
  ).isRequired,
  groupID: string.isRequired,
  className: string,
  radios: map,
  dispatch: func
};

const mapStateToProps = state => ({
  radios: state.radios
});

export default connect(mapStateToProps)(RadioGroup);
