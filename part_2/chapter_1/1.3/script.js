'use strict'

// Дочерние элементы в DOM

// Напишите код, как получить…

// элемент <div>?
// <ul>?
// второй <li> (с именем Пит)?

console.log(document.body.firstElementChild);
console.log(document.body.children[1]);
console.log(document.body.children[1].lastElementChild);

// Вопрос о соседях

// Если elem – произвольный узел DOM-элемента…

// Правда, что elem.lastChild.nextSibling всегда равен null?
// Правда, что elem.children[0].previousSibling всегда равен null ?

// 1.Верно, elem.lastChild всегда последний
// 2.Неверно, перед elem.children[0] могут быть другие узлы

// Выделите ячейки по диагонали

let table = document.body.children[2];

    for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];
      row.cells[i].style.backgroundColor = 'red';
    }



