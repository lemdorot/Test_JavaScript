'use strict'

// Независимы ли счётчики?

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // 0
alert( counter2() ); // 1

// у каждого счетчика свое лексическое окружение, свой count


// Объект счётчика

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter1 = new Counter();
// Будет работать
alert( counter1.up() ); // 1
alert( counter1.up() ); // 2
alert( counter1.down() ); // 1

// Функция в if

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();

// ошибка, функция не видна за пределами if


// Сумма с помощью замыканий

function sum(a) {

  return function(b) {
    return a + b;
  };
}

console.log(sum(2)(3));
console.log(sum(4)(-2));


// Фильтрация с помощью функции

function inBetween(a, b) {
  return function(item) {
    return item >= a && item <= b;
  };
}

function inArray(arr) {
  return function(item) {
    return arr.includes(item);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) );

console.log( arr.filter(inArray([1, 2, 10])) );


// Сортировать по полю

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

users.sort(byField('name'));
console.log(users);

users.sort(byField('age'));
console.log(users);


// Армия функций

function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function() { // функция shooter
      console.log( i ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5]();






