/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  let key = '';
  let count = 0;
  if (domains.length !== 0) {
    const maxLengthItem = domains.sort((a, b) => a.length - b.length)[domains.length - 1];

    const arr = maxLengthItem.split('.');
    for (let i = arr.length - 1; i >= 0; i--) {
      count = domains.reduce((curr, item) => {
        let acc = curr;
        if (item.includes(arr[i])) {
          acc++;
        }
        return acc;
      }, 0);
      res[`${key}.${arr[i]}`] = count;
      key += `.${arr[i]}`;
    }
  }
  return res;
}

module.exports = getDNSStats;
