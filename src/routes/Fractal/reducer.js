import { constructReducers } from 'store/boilerplate';

export function changeValueTo (value) {
  return {
    type: 'CHANGE_VALUE_TO',
    value
  };
}

const handlers = {
  fractal: {
    _init: 0,
    CHANGE_VALUE_TO: (state, action) => action.value
  }
}

export const fractal = constructReducers(handlers).fractal;