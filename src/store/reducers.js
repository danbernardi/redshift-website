import { constructReducers, curryMakeRootReducer, curryInjectReducer } from './boilerplate';
import * as handlers from './handlers';

// EXPORTS
export const reducers = constructReducers(handlers);
export const makeRootReducer = curryMakeRootReducer(reducers);
export const injectReducer = curryInjectReducer(makeRootReducer);

export default makeRootReducer;
