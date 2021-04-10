/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let count = 0;
  const newArr = Array.from(arr).sort((a, b) => a - b);
  const newArr2 = Array.from(arr);

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === -1) {
      newArr.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < newArr2.length; i++) {
    if (newArr2[i] !== -1) newArr2[i] = newArr[i - count];
    else count++;
  }

  return newArr2;
}

module.exports = sortByHeight;
