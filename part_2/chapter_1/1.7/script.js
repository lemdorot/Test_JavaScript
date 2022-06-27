'use strict'

// createTextNode vs innerHTML vs textContent

let text = '<b>текст</b>';

  elem1.append(document.createTextNode(text));
  elem2.innerHTML = text;
  elem3.textContent = text;

// 1 и 3 будет добавление в виде текста

// Очистите элемент

function clear(elem) {
  elem.innerHTML = '';
}

clear(elem);

// Почему остаётся "aaa"?

alert(table); // таблица, как и должно быть

  table.remove();
  // почему в документе остался текст "ааа"?

// Некорректная разметка


// Создайте список

let ul = document.createElement('ul');
  document.body.append(ul);

  while (true) {
    let data = prompt("Введите текст для элемента списка", "");

    if (!data) {
      break;
    }

    let li = document.createElement('li');
    li.textContent = data;
    ul.append(li);
  }

  // Создайте дерево из объекта

  let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },
  
    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {},
        "магнолия": {}
      }
    }
  };

  function createTree(container, obj) {
    container.append(createTreeDom(obj));
  }

  function createTreeDom(obj) {

    if (!Object.keys(obj).length) return;

    let ul = document.createElement('ul');

    for (let key in obj) {
      let li = document.createElement('li');
      li.innerHTML = key;

      let childrenUl = createTreeDom(obj[key]);
      if (childrenUl) {
        li.append(childrenUl);
      }

      ul.append(li);
    }
    return ul;
  }

  let container = document.getElementById('container');
  createTree(container, data);


  // Выведите список потомков в дереве

  let lis = document.getElementsByTagName('li');

  for (let li of lis) {

    let descendantsCount = li.getElementsByTagName('li').length;
    if (!descendantsCount) continue;

    li.firstChild.data += ' [' + descendantsCount + ']';
  }


  // Создайте календарь в виде таблицы

//

// Цветные часы с использованием setInterval

function update() {
  let clock = document.getElementById('clock');
  let date = new Date(); // (*)
  let hours = date.getHours();
  if (hours < 10) hours = '0' + hours;
  clock.children[0].innerHTML = hours;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  clock.children[1].innerHTML = minutes;

  let seconds = date.getSeconds();
  if (seconds < 10) seconds = '0' + seconds;
  clock.children[2].innerHTML = seconds;
}

let timerId;

function clockStart() { // запустить часы
  timerId = setInterval(update, 1000);
  update(); // (*)
}

function clockStop() {
  clearInterval(timerId);
  timerId = null;
}


// Вставьте HTML в список

one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');

// Сортировка таблицы


let sortedRows = Array.from(table1.rows)
      .slice(1)
      .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

    table1.tBodies[0].append(...sortedRows);
console.log(table.rows);








