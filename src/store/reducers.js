import { constructReducers, curryMakeRootReducer, curryInjectReducer } from './boilerplate';
import * as handlers from './handlers';
import RM from 'utils/RequestManager';

const rm = new RM();

// EXPORTS
export const reducers = constructReducers(handlers, {
  apiTracker: (_, action) => {
    // Ignore init actions
    if (['@', 'LOCATION_CHANGE'].filter(t => action.type.indexOf(t) === -1).length === 0) {
      rm.writeLogFromAction(action);
    }
    return null;
  }
});
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
