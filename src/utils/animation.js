export const mapRange = (value, inMin, inMax, outMin, outMax) => (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;

/**
 * Checks if numuber is contained within a range.  Inclusive of
 * minimum, exclusive of maximum;
 * @param  {Number}  val Value to check
 * @param  {Number}  min Minimum range
 * @param  {Number}  max Maximum range (exclusive)
 * @return {Boolean} Returns true or false
 */
export const isInRange = (val, min, max) => {
  return val >= min && val <= max;
}