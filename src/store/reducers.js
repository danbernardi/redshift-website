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

export default makeRootReducer;
