/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const mid = Math.ceil(array.length / 2);
  let res = 0;

  if (value <= array[mid]) {
    for (let i = mid; i > 0; i--) {
      if (array[i] === value) res = i;
    }
  } else {
    for (let i = mid; i < array.length; i++) {
      if (array[i] === value) res = i;
    }
  }

  return res;
}

module.exports = findIndex;
