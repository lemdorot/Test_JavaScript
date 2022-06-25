'use strict';

// Каким будет результат выполнения этого кода?

let user = {
  name: "Джон",
  go: function() { alert(this.name) }
} // ошибка, нет точки с запятой

(user.go)();


// Объясните значение "this"
// В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.
// Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?

let obj, method;

obj = {
  go: function() { console.log(this); }
};

obj.go();               // (1) [object Object]
// обычный вызов, this объект перед точкой

(obj.go)();             // (2) [object Object]
// обычный вызов, this объект перед точкой

(method = obj.go)();    // (3) undefined
// вызов без передачи this

(obj.go || obj.stop)(); // (4) undefined
// вызов без передачи this


// Здесь функция makeUser возвращает объект.

// Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "Джон",
    ref: this
  };
};

let user1 = makeUser();

alert( user1.ref.name ); // Каким будет результат?
// ошибка, значение this undefined


// Создайте калькулятор
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  read() {
    this.a = +prompt('Введите a', 0);
    this.b = +prompt('Введите b', 0);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


// Цепь вызовов
// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     alert( this.step );
//   }
// };
// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

// ladder.up().up().down().showStep(); // 1

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
}

ladder.up().up().down().up().down().showStep();