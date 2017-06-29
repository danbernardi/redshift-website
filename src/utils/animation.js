export const mapRange = (value, inMin, inMax, outMin, outMax) => (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;

/**
 * Checks if numuber is contained within a range.  Inclusive of
 * minimum and maximum
 * @param  {Number}  val Value to check
 * @param  {Number}  min Minimum range
 * @param  {Number}  max Maximum range
 * @return {Boolean} Returns true or false
 */
export const isInRange = (val, min, max) => {
  return val >= min && val <= max;
}


/**
 * Generates a random number in a given a range.  Inclusive of
 * minimum and maximum
 * @param  {Number}  min Minimum range
 * @param  {Number}  max Maximum range
 * @return {Number}  Random integer in given range
 */
export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
