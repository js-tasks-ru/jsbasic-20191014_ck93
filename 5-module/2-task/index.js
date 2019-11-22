/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  /**
   * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');

  let renderItemsIntoTable = function(items, el) {
    el.innerHTML = '';
    let tableHeads = ['Name', 'Age', 'Salary', 'City'];
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');

    tableHeads.forEach(function(item) {
      let td = document.createElement('td');
      td.textContent = item;
      tr.append(td);
    });
    thead.append(tr);
    el.append(thead);

    let tbody = document.createElement('tbody');

    items.forEach(function(item) {
      let tr = document.createElement('tr');
      for (let property in item) {
        let td = document.createElement('td');
        td.textContent = item[property];
        tr.append(td);
      }
      tbody.append(tr);
    });
    el.append(tbody);
  };

  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {

    items.sort(function(a, b) {
      let foundKey = Object.keys(a)[column];

      if (typeof a[foundKey] === 'number') {
        return a[foundKey] - b[foundKey];
      } else {
        return a[foundKey] > b[foundKey] ? 1 : -1;
      }
    });

    if (desc === true) {
      items.reverse();
    }
    renderItemsIntoTable(items, this.el);
  };
  renderItemsIntoTable(items, this.el);
}

