import React from 'react';
import Nav from 'components/Nav';
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
  _init: { modalID: 'nav', component: <Nav />, open: false },
  TOGGLE_MODAL: (state, action) => Object.assign({}, state, { open: action.open }),
  SET_ACTIVE_MODAL: (state, action) => Object.assign({}, state, { component: action.component, modalID: action.modalID })
};

export const caseStudyState = {
  _init: { current: null },
  SET_NEXT_CASE_STUDY: (state, action) => Object.assign({}, state, { current: action.nextID })
};

export const featuredCaseStudyState = {
  _init: { activeID: -1, previousIDs: [], animate: true },
  GO_TO_NEXT_CASE_STUDY: (state, action) => {
    let newPrevious = state.previousIDs.slice();
    if (action.reset) {
      newPrevious = action.reset;
    } else {
      newPrevious.push(state.activeID);
    }
    return Object.assign({}, state, { activeID: action.nextID, previousIDs: newPrevious, animate: action.animate });
  },
  REVERT_TO_PREVIOUS_CASE_STUDY: (state, action) => {
    const newPrevious = state.previousIDs.slice();
    const removalIndex = newPrevious.indexOf(action.prevID);
    newPrevious.splice(removalIndex, 1);
    return Object.assign({}, state, { activeID: state.activeID - 1, previousIDs: newPrevious, animate: action.animate });
  }
};

export const headerTheme = {
  _init: 'pink',
  SET_HEADER_THEME: (state, action) => action.theme
};

export const loaded = {
  _init: false,
  SET_AS_LOADED: (state, action) => action.loaded
};

export const bannerState = {
  _init: { active: 0, complete: [], color: '#FFFFFF' },
  SET_ACTIVE_BANNER: (state, action) => Object.assign({}, state, { active: action.bannerIndex, color: action.bannerColor }),
  ADD_BANNER_TO_COMPLETE: (state, action) => {
    const newComplete = state.complete.slice();
    newComplete.push(action.bannerIndex);
    return Object.assign({}, state, { complete: newComplete });
  }
};
