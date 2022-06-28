'use strict'

//1. Выбрать input типа checkbox.
//2. Выбрать input типа checkbox, НЕ отмеченный.
//3. Найти все элементы с id=message или message-*.
//4. Найти все элементы с id=message-*.
//5. Найти все ссылки с расширением href="...zip".
//6. Найти все элементы с атрибутом data-action, содержащим delete в списке (через пробел).
//7. Найти все элементы, у которых ЕСТЬ атрибут data-action, но он НЕ содержит delete в списке (через пробел).
//8. Выбрать все чётные элементы списка #messages.
//9. Выбрать один элемент сразу за заголовком h3#widget-title на том же уровне вложенности.
//10. Выбрать все ссылки, следующие за заголовком h3#widget-title на том же уровне вложенности.
//11. Выбрать ссылку внутри последнего элемента списка #messages.

console.log(document.querySelectorAll('input[type="checkbox"]'));//1.
console.log(document.querySelectorAll('input[type="checkbox"]:not(:checked)'));//2.
console.log(document.querySelectorAll('[id|="message"]'));//3.
console.log(document.querySelectorAll('[id^="message-"]'));//4.
console.log(document.querySelectorAll('a[href$=".zip"]'));//5.
console.log(document.querySelectorAll('[data-action~="delete"]'));//6.
console.log(document.querySelectorAll('[data-action]:not([data-action~="delete"])'));//7.
console.log(document.querySelectorAll('#messages li:nth-child(2n)'));//8.
console.log(document.querySelectorAll('h3#widget-title + *'));//9.
console.log(document.querySelectorAll('h3#widget-title ~ a'));//10.
console.log(document.querySelectorAll('#messages li:last-child a'));//11.