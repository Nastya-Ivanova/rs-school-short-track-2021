/*
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
  const str = `${n}`;
  const arr = str.split('');
  const minNumber = arr.reduce((min, item) => Math.min(min, item));
  const indexMinNumber = str.indexOf(minNumber);

  const res = arr.filter((item, index) => index !== indexMinNumber);
  return +res.join('');
}

module.exports = deleteDigit;
