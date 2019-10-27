/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
let pow = function (m, n) {
  return (n === 1) ? m : m * pow(m, n - 1);
};
