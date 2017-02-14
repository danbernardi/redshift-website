/**
 * Debounces scroll events, running an optional leadingFunc immediately, and
 * then canceling all further scroll events during the wait period, optionally
 * running trailingFunc on completion.
 * @param  {Function} leadingFunc     Function to run at beginning of debounce call
 * @param  {Number} wait              Duration during which to cancel further calls
 * @param  {Function} trailingFunc    Function to run once the wait period is over
 * @return {Function}                 Returns debounced function
 */
export const scrollDebounce = (wait, leadingFunc = null, trailingFunc = null) => {
  // we need to save these in the closure
  let timeout;
  let args;
  let context;
  let timestamp;
  let callCount = 0;

  return function () {
    // save details of latest call
    context = this;
    args = [].slice.call(arguments, 0);
    timestamp = new Date();

    if (callCount === 0 && leadingFunc instanceof Function) leadingFunc.apply(context, args);
    ++callCount;

    // this is where the magic happens
    const later = function () {
      // how long ago was the last call
      const last = (new Date()) - timestamp;

      // if the latest call was less that the wait period ago
      // then we reset the timeout to wait for the difference
      if (last < wait) {
        timeout = setTimeout(later, wait - last);

      // or if not we can null out the timer and run the latest
      } else {
        timeout = null;
        if (callCount > 1 && trailingFunc instanceof Function) trailingFunc.apply(context, args);
        callCount = 0;
      }
    };

    // we only need to set the timer now if one isn't already running
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
  };
};
