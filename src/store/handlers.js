// Handlers map actions to reducing functions,
// and declare init state.
// These objects are converted into reducer functions in the reducers file.

export const counter = {
  _init: 1,
  INCREMENT_COUNTER: (state, action) => state + action.value,
  DECREMENT_COUNTER: (state, action) => state - action.value
};

export const location = {
  _init: '/',
  LOCATION_CHANGE: (state, action) => action.location
};
