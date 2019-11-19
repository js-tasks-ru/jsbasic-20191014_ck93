/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let trCollection = table.querySelectorAll('tr');
  let trArray = Array.from(trCollection);

  trArray.forEach(function(currentTr) {
    let tdCollection = currentTr.querySelectorAll('td');
    let tdArray = Array.from(tdCollection);

    switch (tdArray[3].getAttribute('data-available')) {
    case 'true':
      currentTr.classList.add('available');
      break;
    case 'false':
      currentTr.classList.add('unavailable');
      break;
    default:
      currentTr.setAttribute('hidden', 'true');
    }

    switch (tdArray[2].innerText) {
    case 'm':
      currentTr.classList.add('male');
      break;
    case 'f':
      currentTr.classList.add('female');
      break;
    }

    if (+tdArray[1].innerText < 18) {
      currentTr.style.textDecoration = 'line-through';
    }
  });
}
