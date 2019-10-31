/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
let getMinMax = function(str) {
  let arrayOfNumbers = [];

  while (str.length > 0) {
    let currentNumber = (parseFloat(str));
    if (!isNaN(currentNumber)) {
      arrayOfNumbers.push(currentNumber);
      let lengthOfNumber = String(currentNumber).length;
      str = str.slice(lengthOfNumber);
    } else {
      str = str.slice(1);
    }
  }

  let compare = function(a, b) {
    return (a - b);
  };

  let sortedArray = arrayOfNumbers.sort(compare);
  console.log(sortedArray);

  return {
    min: sortedArray[0],
    max: sortedArray[sortedArray.length - 1],
  };
};
