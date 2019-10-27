/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
let isEmpty = function(obj) {
  for (let property in obj) {
    if (obj.hasOwnProperty(property)) {
      return false;
    } else {
      continue;
    }
  }
  return true;
};
