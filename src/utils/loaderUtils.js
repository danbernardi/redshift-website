import { CALL_API } from 'redux-api-middleware';

/** Turns a type string into an object of base and end
 * @param {String} type An FSAA action type (ie 'INTERVALSTODATE_SUCCESS')
 * @return {Object} An object with 'base' and 'end' keys
 * @memberof loaderUtils
 */
export function parseActionType (type) {
  const array = type.split('_');

  return {
    base: array.slice(0, array.length - 1).join('_'),
    end: array[array.length - 1]
  };
}

/**
 * Takes an API action and gets the possible action responses.
 * Usually [SOMEACTION_REQUEST, SOMEACTION_SUCCESS, SOMEACTION_FAILED]
 * @param  {Object} action A valid redux API action
 * @return {Array}        An array of api action responses
 * @memberof loaderUtils
 */
export function getResponseTypesFromAction (action) {
  return action[CALL_API].types
    .map(actionInfo => {
      if (typeof actionInfo === 'string') {
        return actionInfo;
      } else {
        return actionInfo.type;
      }
    });
}

/**
 * Takes an API action and gets the ID (if any) given in the request.
 * @param  {Object} action A valid redux API action
 * @return {Number}        A site ID
 * @memberof loaderUtils
 */
export function getIDFromAction (action) {
  const firstType = action[CALL_API].types[0];
  return firstType.meta && firstType.meta.id;
}

