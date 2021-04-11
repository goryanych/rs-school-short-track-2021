/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    let count = 0;

    for (let j = i; j < str.length; j++) {
      if (str[i] === str[j]) count++;
      else break;
    }

    newStr += `${count === 1 ? '' : count}${str[i]}`;

    if (i !== str.length - 1) i += count - 1;
    else break;
  }

  return newStr;
}

module.exports = encodeLine;
