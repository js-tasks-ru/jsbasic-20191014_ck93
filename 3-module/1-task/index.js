/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
let showSalary = function(data, age) {
  let acceptableUsers = data.filter(function(elementOfArray) {
    return (elementOfArray.age <= age);
  });
  let arrayOfRows = acceptableUsers.map(function(user) {
    return `${user.name}, ${user.balance}`;
  });
  return arrayOfRows.join('\n');
};
