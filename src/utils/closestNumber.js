/**
 * Returns number in a array that is closest to the passed num parameter
 * @param  {Number} num             Number to compare each item in the array against
 * @param  {Array} arr              Array containing various unique numbers
 * @return {Number}                 Returns a number
 */
export const getClosestNumber = (num, arr) => {
  let curr = arr[0];
  let diff = Math.abs(num - curr);
  for (var val = 0; val < arr.length; val++) {
    var newdiff = Math.abs(num - arr[val]);
    if (newdiff < diff) {
      diff = newdiff;
      curr = arr[val];
    }
  }
  return curr;
};
