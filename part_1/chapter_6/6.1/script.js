'use strict'

// Вычислить сумму чисел до данного

// Цикл
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum = sum + i;
    }
    return sum;
  }
  
console.log( sumTo(100) );

// Рекурсия
function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
  }
  
console.log( sumTo(100) );

// Формула

function sumTo(n) {
    return n * (n + 1) / 2;
  }
  
console.log( sumTo(100) );

// Вычислить факториал

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
console.log( factorial(5) );

// Числа Фибоначчи

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  
console.log( fib(5) );
console.log( fib(13) );
console.log( fib(56) );


// Вывод односвязного списка

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printList(list) {
  
    console.log(list.value);
  
    if (list.next) {
      printList(list.next);
    }
  
  }
  
  printList(list);

//   Вывод односвязного списка в обратном порядке

let list1 = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printReverseList(list) {
  
    if (list.next) {
      printReverseList(list.next);
    }
  
    console.log(list.value);
  }
  
  printReverseList(list1);






