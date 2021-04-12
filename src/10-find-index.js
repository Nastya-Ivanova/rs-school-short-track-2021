/*
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
  let leftPointIndex = 0;
  let rightPointIndex = array.length - 1;
  let position = -1;
  let found = false;
  let middlePointIndex;

  while (!found && leftPointIndex <= rightPointIndex) {
    middlePointIndex = Math.floor((leftPointIndex + rightPointIndex) / 2);
    if (array[middlePointIndex] === value) {
      position = middlePointIndex;
      found = true;
    } else if (array[middlePointIndex] < value) {
      leftPointIndex = middlePointIndex + 1;
    } else {
      rightPointIndex = middlePointIndex - 1;
    }
  }
  return position;
}

module.exports = findIndex;
