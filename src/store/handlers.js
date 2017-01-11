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

export const modalState = {
  _init: { modalID: null, component: null, open: false },
  TOGGLE_MODAL: (state, action) => Object.assign({}, state, { open: action.open }),
  SET_ACTIVE_MODAL: (state, action) => Object.assign({}, state, { component: action.component, modalID: action.modalID })
};

export const caseStudyState = {
  _init: { current: [], currentScrollPos: 0 },
  SET_NEXT_CASE_STUDY: (state, action) => {
    let newCurrent;
    if (action.reset) {
      newCurrent = [action.nextID];
    } else {
      newCurrent = state.current.slice();
      if (newCurrent.length >= 2) { newCurrent.shift(); };
      newCurrent.push(action.nextID);
    }

    return Object.assign({}, state, { current: newCurrent, currentScrollPos: action.scrollPos });
  }
};
