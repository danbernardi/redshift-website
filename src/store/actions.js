export const incrementCounter = (value = 1) => ({
  type: 'INCREMENT_COUNTER', value
});

export const decrementCounter = (value = 1) => ({
  type: 'DECREMENT_COUNTER', value
});

export const locationChange = (location = '/') => ({
  type: 'LOCATION_CHANGE', location
});

export const setDropdownValues = (id, values) => ({
  type: 'SET_DROPDOWN_VALUES', id, values
});

export const setOpenDropdownID = (id) => ({
  type: 'SET_OPEN_DROPDOWN_ID', id
});

export const setRadioValue = (groupID, item) => ({
  type: 'SET_RADIO_VALUE', groupID, item
});

export const setCheckboxValue = (boxID, value) => ({
  type: 'SET_CHECKBOX_VALUE', boxID, value
});

export const setActiveModal = (component, modalID) => ({
  type: 'SET_ACTIVE_MODAL', component, modalID
});

export const toggleModal = (open) => ({
  type: 'TOGGLE_MODAL', open
});

export const setNextCaseStudy = (nextID) => ({
  type: 'SET_NEXT_CASE_STUDY', nextID
});

export const setHeaderTheme = (theme) => ({
  type: 'SET_HEADER_THEME', theme
});

export const goToNextCaseStudy = (nextID, animate = true, reset = false) => ({
  type: 'GO_TO_NEXT_CASE_STUDY', nextID, animate, reset
});

export const revertToPreviousCaseStudy = (prevID, animate = true) => ({
  type: 'REVERT_TO_PREVIOUS_CASE_STUDY', prevID, animate
});

// windowsize
export const updateWindowWidth = (windowWidth) => ({
  type: 'UPDATE_WINDOW_WIDTH', windowWidth
});

// Specialized actions below -- don't follow patterns
// When adding actions here, add them to the exceptions array in the actions spec.

export const updateLocation = ({ dispatch }) => (nextLocation) => dispatch(locationChange(nextLocation));
