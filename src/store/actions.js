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

// Specialized actions below -- don't follow patterns
// When adding actions here, add them to the exceptions array in the actions spec.

export const updateLocation = (
  { dispatch }: { dispatch: Function }
) => (nextLocation: string) => dispatch(locationChange(nextLocation));
