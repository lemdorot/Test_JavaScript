'use strict'

// Изменяем "prototype"

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

// 1. Rabbit.prototype = {}; 
// 2. Rabbit.prototype.eats = false;
// 3. delete rabbit.eats;
// 4. delete Rabbit.prototype.eats;

console.log( rabbit.eats ); // ?
// 1. true
// 2. false
// 3. true
// 4. undefined

// Создайте новый объект с помощью уже существующего

function User(name) {
  this.name = name;
}

let user = new User('John');
let user2 = new user.constructor('Pete');

console.log( user2.name );

















