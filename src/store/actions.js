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
