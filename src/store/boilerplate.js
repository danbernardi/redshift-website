import { CALL_API } from 'redux-api-middleware';
import { combineReducers } from 'redux';

const reducerObjFromHandlerWrapper = (handlers) => handlerName => {
  const handler = handlers[handlerName];
  const initState = handler._init;

  delete handler['_init'];

  const reducerFunc = (state = initState, action) => handler[action.type]
    ? handler[action.type](state, action)
    : state;

  return { [handlerName]: reducerFunc };
};

export const constructReducers = (handlers) => {
  const reducerObjFromHandler = reducerObjFromHandlerWrapper(handlers);
  return Object.keys(handlers)
    .reduce((obj, name) => Object.assign(
      obj, reducerObjFromHandler(name)),
    {});
};

export const curryMakeRootReducer = mainReducers => asyncReducers => combineReducers({
  ...mainReducers,
  ...asyncReducers
});

export const curryInjectReducer = makeRootReducer => (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

// FOR ASYNC ACTIONS

const addArgToResponse = (responseType, argKey, argVal, endpoint) => {
  const identifyingInfo = argVal ? { [argKey]: argVal } : {};
  const response = {
    type: responseType,
    meta: Object.assign({ endpoint }, identifyingInfo),
    payload: (action, state, res) => {
      if (!res) return identifyingInfo; // Dispatching response

      const contentType = res.headers.get('Content-Type');

      // Ensure res.json() does not raise an error
      if (!(contentType && ~contentType.indexOf('json'))) {
        throw new Error('Invalid object received. Expected JSON.');
      }

      return res.json()
        .then(originalJSON => Object.assign(identifyingInfo, originalJSON));
    }
  };

  return response;
};

// Helper function for constructing FSAAs
export function asyncRequestObject (
  typeBase,
  endpoint, {
    addThisIDToResponse = false,
    method = 'GET',
    data,
    headerAdditions = {}
  }
) {
  const types = ['REQUEST', 'SUCCESS', 'FAILURE']
          .map(ending => [typeBase, ending].join('_'))
          .map(type => addArgToResponse(type, 'id', addThisIDToResponse, endpoint));
  const object = {
    endpoint,
    method,
    types,
    headers: Object.assign({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }, headerAdditions)
  };
  if (data) { object.body = data; }

  return {
    [CALL_API]: object
  };
};
