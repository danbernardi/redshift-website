import _ from 'lodash';
import moment from 'moment';
import {
  getResponseTypesFromAction,
  getIDFromAction,
  parseActionType
} from './loaderUtils';

const FRESHNESS_CUTOFF_SECONDS = 300;
const REQUEST_THROTTLE_SECONDS = 40; // TODO: Return this to 10 or something once we're on a faster API

/** @class RequestManager */

/**
 * A tool for tracking actions across the site.
 * Uses window.actionLogs object. Structured as tree by ID. Ex:
 * ```
 * {
 *   "46": {
 *     "YEARLY_STATS": {
 *       "REQUEST": "2016-10-06T23:38:46.637Z",
 *     },
 *     "SET_CHART_FILTER_VALUE": {
 *       "ENERGY_DATERANGE": "2016-10-06T23:38:45.872Z",
 *     }
 *   },
 *   "GLOBAL": {
 *     "BUILDINGS": {
 *       "REQUEST": "2016-10-06T23:38:44.980Z",
 *       "SUCCESS": "2016-10-06T23:38:45.776Z"
 *     },
 *     "SET_CHART_FILTER_VALUE": {
 *       "TABLE_DATERANGE": "2016-10-06T23:38:44.873Z"
 *     }
 *   }
 * }
 * ```
 *
 */
export default class RequestManager {
  constructor (dispatch) {
    window.actionLogs = window.actionLogs || {};
    this._dispatch = dispatch || (() => {
      console.warn('RequestManager needs to be initialized with a dispatch function.');
    });
  }

  // PRIMARY PUBLIC API //

  /**
   * Logs and dispatches an action
   * @param  {Object} action Action object
   * @memberof RequestManager
   */
  dispatch (action) {
    this.writeLogFromAction(action);
    this._dispatch(action);
  }

  /**
   * Takes an api action object and dispatches it if there's no request in the log
   * @param  {Object} actionObj A redux FSAA
   * @memberof RequestManager
   */
  dispatchIfHaventAlready (actionObj) {
    if (!this.findLogFromAction(actionObj)) {
      this.dispatch(actionObj);
    }
  }

  /** Takes an API action object
   *  and returns a bool for whether it has been recently dispatched.
   *  @param {Object} actionObj A redux FSAA
   *  @return {Boolean} True if it has dispatched recently; false if not
   *  @memberof  RequestManager
   */
  haveRequestedRecently (actionObj, secondsCutoff = REQUEST_THROTTLE_SECONDS) {
    const requestTime = this.findLogFromAction(actionObj);
    return requestTime && moment().diff(requestTime, 'seconds') < secondsCutoff; // Throttle requests
  }

  /** Takes an API action object and second argument of minutes of freshness,
   *  and returns a bool for whether it has succeeded since the freshness cutoff.
   *  @param {Object} actionObj A redux FSAA
   *  @param {Number} secondsCutoff Number of minutes beyond which data is considered unfresh
   *  @return {Boolean} True if it has succeeded since the cutoff; false if not
   *  @memberof  RequestManager
   */
  haveSucceededSinceCutoff (actionObj, secondsCutoff = FRESHNESS_CUTOFF_SECONDS) { // 5 minute default
    const successTime = this.findLogFromAction(actionObj, 'SUCCESS');
    return successTime && moment().diff(successTime, 'seconds') < secondsCutoff;
  }

  /** Returns a flattened version of the actionLogs tree
   *  needs no arguments (just uses them recursively)
   *  @return {Array} Flat list of strings representing executed actions
   *  @memberof RequestManager
   */
  flattenedLogs (object = window.actionLogs, string) {
    const multiDimensional = Object.keys(object).map(key => {
      const val = object[key];
      if (typeof val === 'object') {
        return this.flattenedLogs(val, _.compact([string, key]).join('--'));
      } else {
        return _.compact([string, key, val]).join('--');
      }
    });
    return _.flattenDeep(multiDimensional);
  }

  // PATH LOGGING FUNCTIONS //

  writeLog (objectPath, timestamp = Date().toISOString()) {
    _.set(window.actionLogs, objectPath, timestamp);
  }

  findLog (objectPath) {
    return _.get(window.actionLogs, objectPath);
  }

  removeLog (objectPath) {
    _.unset(window.actionLogs, objectPath);
  }

  // ACTION LOGGING FUNCTIONS //

  writeLogFromAction (action) {
    const now = action.now || new Date().toISOString();
    this.writeLog(this._pathToLogFromAction(action), now);
  }

  findLogFromAction (action, specifiedEnd) {
    let path = this._pathToLogFromAction(action);
    if (specifiedEnd) {
      const array = path.split('.');
      array.pop();
      path = [...array, specifiedEnd].join('.');
    }
    return this.findLog(path);
  }

  // HELPERS //

  _pathToLogFromAction (action) {
    if (action.type) { // Normal action, or returning async
      const parsedType = parseActionType(action.type);
      if (['REQUEST', 'SUCCESS', 'FAILURE'].includes(parsedType.end)) {
        return this._asyncReturnPath(action, parsedType);
      } else {
        return this._normalActionPath(action);
      }
    } else { // An async action going out
      return this._emittingAsyncPath(action);
    }
  }

  _asyncReturnPath (action, parsedType) {
    const id = ((action.meta && action.meta.id && action.meta.id.toString()) || 'GLOBAL')
                  .toString().toUpperCase();
    return `${id}.${parsedType.base}.${parsedType.end}`;
  }

  _normalActionPath (action) {
    const id = (action.siteID || action.id || 'GLOBAL').toString().toUpperCase();

    // Add all printable args to log, for specificity
    const specifiers = Object.keys(action)
      .filter(k => ['string', 'number'].includes(typeof action[k]) &&
                  !['type', 'siteID', 'id', 'now'].includes(k))
      .map(s => action[s].toString().toUpperCase());

    const base = [id, action.type].join('.');
    return specifiers.length > 0 ? `${base}.${specifiers.join('_')}` : base;
  }

  _emittingAsyncPath (action) {
    const type = getResponseTypesFromAction(action)[0];
    const id = (getIDFromAction(action) || 'GLOBAL').toString().toUpperCase();
    const parsedType = parseActionType(type);

    return `${id}.${parsedType.base}.${parsedType.end}`;
  }
}
