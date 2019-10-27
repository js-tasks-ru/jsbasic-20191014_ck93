/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */

let clone = function(obj) {
  let newObject = {};
  for (let property in obj) {
    if (typeof obj[property] !== 'object' || obj[property] === null) {
      newObject[property] = obj[property];
    } else if (Array.isArray(obj[property]) === true) {
      newObject[property] = obj[property].slice();
    } else {
      newObject[property] = clone(obj[property]);
    }
  }
  return newObject;
};

