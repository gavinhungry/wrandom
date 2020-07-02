/**
 * wrandom - Get a random element from a weighted array
 * https://github.com/gavinhungry/wrandom
 */

(function() {
  'use strict';

  /**
   * Get a random number from `arr`, weighted by `weights`
   *
   * Note: `weights` do not have to add up to anything - they are simply
   * relative to each other.
   *
   * @example
   *
   *   let arr = ['foo', 'bar', 'baz'];
   *   wrandom(arr, [4, 6, 10]); // same as [0.2, 0.3, 0.5]
   *   wrandom(arr); // same as [1, 1, 1]
   *
   * @param {Array} arr
   * @param {Array} weights
   * @return {Mixed}
   */
  let wrandom = (arr, weights) => {
    if (!weights) {
      weights = arr.map(() => 1);
    }

    let sum = weights.reduce((memo, weight) => memo + weight, 0);
    let pos = Math.random() * sum;
    let cur = 0;

    for (let i = 0; i < arr.length; i++) {
      cur += (weights[i] || 0);

      if (cur >= pos) {
        return arr[i];
      }
    }
  };

  module.exports = wrandom;
})();
