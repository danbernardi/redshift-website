import { fromJS } from 'immutable';

// Handlers map actions to reducing functions,
// and declare init state.
// These objects are converted into reducer functions in the reducers file.
export const location = {
  _init: '/',
  LOCATION_CHANGE: (state, action) => action.location
};

export const dropdowns = {
  _init: fromJS({}),
  SET_DROPDOWN_VALUES: (state, action) => state.merge({ [action.id]: action.values })
};

export const openDropdownID = {
  _init: null,
  SET_OPEN_DROPDOWN_ID: (state, action) => action.id
};

export const radios = {
  _init: fromJS({}),
  SET_RADIO_VALUE: (state, action) => state.merge({ [action.groupID]: action.item })
};

export const checkboxes = {
  _init: fromJS({}),
  SET_CHECKBOX_VALUE: (state, action) => state.merge({ [action.boxID]: action.value })
};

// For demo purposes
export const github = {
  _init: fromJS({}),
  GITHUB_REPO_SUCCESS: (state, action) => state.merge({ [action.meta.id]: action.payload }),
  GITHUB_REPO_FAILURE: (state, action) => {
    console.log('API ERROR: ', action);
    return state;
  }
};
