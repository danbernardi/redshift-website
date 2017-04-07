/**
 * Basic string shortening.
 *
 * @param {String} string A string string to be shortened.
 * @returns {String} The string if shorter than 28 chars, or the string shortened
 * to 28 chars with an added ellipsis.
 */
export function ellipsisString(string, charLength = 28) {
  if (string.length > charLength) {
    return string.slice(0, charLength).concat('...');
  } else {
    return string;
  }
}
