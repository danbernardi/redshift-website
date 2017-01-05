// @flow

export const incrementCounter = (value: number = 1) => ({
  type: 'INCREMENT_COUNTER', value
});

export const decrementCounter = (value: number = 1) => ({
  type: 'DECREMENT_COUNTER', value
});

export const locationChange = (location: string = '/') => ({
  type: 'LOCATION_CHANGE', location
});

type DropdownValues = [{ index: number, value: string }];
export const setDropdownValues = (id: string, values: DropdownValues) => ({
  type: 'SET_DROPDOWN_VALUES', id, values
});

export const setOpenDropdownID = (id: string) => ({
  type: 'SET_OPEN_DROPDOWN_ID', id
});

// Specialized actions below -- don't follow patterns
// When adding actions here, add them to the exceptions array in the actions spec.

export const updateLocation = (
  { dispatch }: { dispatch: Function }
) => (nextLocation: string) => dispatch(locationChange(nextLocation));
