'use strict'

let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

console.log( rabbit.jumps ); // true

delete rabbit.jumps;

console.log( rabbit.jumps ); // null

delete animal.jumps;

console.log( rabbit.jumps ); // undefined


// Алгоритм поиска

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

console.log( pockets.pen ); // 3
console.log( bed.glasses ); // 1
console.log( table.money ); // undefined

// Куда будет произведена запись?

let animal1 = {
  eat() {
    this.full = true;
  }
};

let rabbit1 = {
  __proto__: animal1
};

rabbit.eat();

// Ответ: rabbit

// Почему наедаются оба хомяка?

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [food];
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

speedy.eat("apple");
console.log( speedy.stomach ); 

console.log( lazy.stomach );
