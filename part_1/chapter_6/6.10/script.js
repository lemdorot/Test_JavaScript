'use strict'

// Связанная функция как метод

// Что выведет функция?

function f() {
  alert( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g();

//ответ null


// Повторный bind

// Что выведет этот код?

function f() {
  console.log(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f(); // Вася

// Свойство функции после bind

// В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.

function sayHi() {
  console.log( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

console.log( bound.test ); // что выведет? почему?

// Ответ: undefined.

// Результатом работы bind является другой объект. У него уже нет свойства test.



// Исправьте функцию, теряющую "this"

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user1 = {
  name: 'Вася',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },

};

askPassword(user1.loginOk.bind(user1), user1.loginFail.bind(user1));

// Использование частично применённой функции для логина

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user2 = {
  name: 'John',

  login(result) {
    console.log( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false));








