'use strict'

// Хранение отметок "не прочитано"

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

// Два сообщения были прочитаны
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages содержит 2 элемента

function question(messages) {
  if (readMessages.has(messages)) {
    console.log("Сообщение прочитанно!")
  } else {
    console.log("Сообщение не прочитанно!")
  }
};
  
question(messages[0]);

// Хранение времени прочтения

let messages1 = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2022, 1, 1));



