'use strict';

// Сделать первый символ заглавным
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

function ucFirst(str) {
    return `${str[0].toUpperCase() + str.slice(1)}`;
}

console.log(ucFirst('василий'));

// Проверка на спам
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

function checkSpam(str) {
    let newStr = str.toLowerCase();

    return newStr.includes('viagra') || newStr.includes('xxx');
}

console.log(checkSpam('василий ViaGra'));

// Усечение строки
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

function truncate(str, maxlength) {
    let newStr
    if (str.length > maxlength) {
        newStr = str.slice(0, maxlength) + '...';
        return newStr;
    }else{
        return str;
    }
}

console.log(truncate('Результатом функции должна быть та же строка', 15));

// Выделить число
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

function extractCurrencyValue(str) {
    return +str.slice(1);
}

console.log(extractCurrencyValue('$120'));


