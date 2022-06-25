// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
  let words = str.split('-');
  words = words.map( (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));
  words = words.join('');
  return words;
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));

// Фильтрация по диапазону
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

// Функция должна возвращать новый массив и не изменять исходный.

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (совпадающие значения)

console.log( arr ); // 5,3,8,1 (без изменений)


// Фильтрация по диапазону "на месте"
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

function filterRangeInPlace(arr, a, b){
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num < a || num > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let array = [5, 3, 8, 1];

filterRangeInPlace(array, 1, 4); // удалены числа вне диапазона 1..4

console.log( array ); // [3, 1]


//Сортировать в порядке по убыванию

let arr1 = [5, 2, 1, -10, 8];

arr1.sort((a, b) => b - a);

console.log( arr1 ); // 8, 5, 2, 1, -10


//Скопировать и отсортировать массив

// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

function copySorted(arr) {
  let newArr = arr.slice();
  return newArr.sort();
}

let arr2 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr2);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr2 ); // HTML, JavaScript, CSS (без изменений)


//Создать расширяемый калькулятор

function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8

// Трансформировать в массив имён
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

console.log( names ); // Вася, Петя, Маша

// Трансформировать в объекты
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [ vasya1, petya1, masha1 ];

let usersMapped = users1.map(item => ({
  fullName: `${item.name} ${item.surname}`,
  id: item.id
}));

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // Вася Пупкин

// Отсортировать пользователей по возрасту
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

function sortByAge(users) {
  users.sort((a, b) => a.age > b.age ? 1 : -1);
}

let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 28 };

let arr3 = [ vasya2, petya2, masha2 ];

sortByAge(arr3);

// теперь: [vasya, masha, petya]
console.log(arr3[0].name); // Вася
console.log(arr3[1].name); // Маша
console.log(arr3[2].name); // Петя


// Перемешайте массив
// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

let arr4 = [1, 2, 3];

console.log(shuffle(arr4));
console.log(shuffle(arr4));
console.log(shuffle(arr4));


// Получить средний возраст
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

function getAverageAge(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i].age;
  }
  return sum / arr.length;
}

let vasya4 = { name: "Вася", age: 25 };
let petya4 = { name: "Петя", age: 30 };
let masha4 = { name: "Маша", age: 29 };

let arr5 = [ vasya4, petya4, masha4 ];

console.log( getAverageAge(arr5) );

// Оставить уникальные элементы массива
// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

function unique(arr) {
  let res = [];

  for (let str of arr) {
    if (!res.includes(str)) {
      res.push(str);
    }
  }

  return res;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) );






