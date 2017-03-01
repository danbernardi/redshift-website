import { constructReducers, curryMakeRootReducer, curryInjectReducer } from './boilerplate';
import * as handlers from './handlers';

// EXPORTS
export const reducers = constructReducers(handlers);
export const makeRootReducer = curryMakeRootReducer(reducers);
export const injectReducer = curryInjectReducer(makeRootReducer);

export const formRouteWithReducer = store => ({ name, path, Component, reducer }) => ({
  path,
  getComponent (nextState, cb) {
    if (reducer) {
      injectReducer(store, { key: name || path, reducer });
    };

    cb(null, Component);
  }
});

function _breakpointObject (value) {
  const breakpoints = {
    desktopLg: 1400,
    desktopSm: 1200,
    tabletLg: 1040,
    tabletMd: 991,
    tabletSm: 840,
    mobileLg: 767,
    mobileSm: 540
  };

  const comparison = b => typeof (b) === 'string' ? breakpoints[b] : b;

  return ({
    isGreaterThan: breakpoint => parseInt(value) > comparison(breakpoint),
    isLessThan: breakpoint => parseInt(value) < comparison(breakpoint),
    is: breakpoint => parseInt(value) === comparison(breakpoint),
    value,
    breakpoints
  });
}

export function windowSize (state = _breakpointObject(1200), action) {
  switch (action.type) {
    case 'UPDATE_WINDOW_WIDTH':
      if (action.windowWidth) {
        return _breakpointObject(action.windowWidth);
      }
      break;
    default:
      return state;
  }
}

export default makeRootReducer;
