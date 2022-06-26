'use strict'

// Установка и уменьшение значения счётчика

function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = value => count = value;

  counter.decrease = () => count--;

  return counter;
}

let counter = makeCounter();
  
console.log( counter() );
console.log( counter() );

counter.set(10);

console.log( counter() ); 
counter.decrease(); 

console.log( counter() );


// Сумма с произвольным количеством скобок

function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

console.log( +sum(1)(2) );
console.log( +sum(5)(-1)(2) );
console.log( +sum(6)(-1)(-2)(-3) );
console.log( +sum(0)(1)(2)(3)(4)(5) );