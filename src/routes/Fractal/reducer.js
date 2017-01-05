import { fromJS } from 'immutable';
import { constructReducers } from 'store/boilerplate';

export function changeNumberTo (number) {
  return {
    type: 'CHANGE_VALUE_TO',
    number
  };
}

const handlers = {
  fractal: {
    _init: fromJS({ number: 0 }),
    CHANGE_VALUE_TO: (state, action) => state.merge(fromJS({ number: action.number }))
  }
};

export const fractal = constructReducers(handlers).fractal;
