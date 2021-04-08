/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('').sort();
  const res = n.toString().split('');
  res.splice(res.indexOf(arr[0]), 1);

  return +res.join('');
}

module.exports = deleteDigit;
