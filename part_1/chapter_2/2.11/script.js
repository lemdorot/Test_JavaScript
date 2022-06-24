// Что выведет alert (ИЛИ)?
// Что выведет код ниже?

alert( null || 2 || undefined ); // 2

// Что выведет alert (ИЛИ)?
// Что выведет код ниже?

alert( alert(1) || 2 || alert(3) ); // 1, 2

// Что выведет alert (И)?
// Что выведет код ниже?

alert( 1 && null && 2 ); // null

// Что выведет alert (И)?
// Что выведет код ниже?

alert( alert(1) && alert(2) ); // undefined

// Что выведет этот код?
// Что выведет код ниже?

alert( null || 2 && 3 || 4 ); // 3

// Проверка значения из диапазона
// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

let age;
if (age >= 14 && age <= 90)

// Проверка значения вне диапазона
// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

if (!(age >= 14 && age <= 90))
if (age < 14 || age > 90)

// Вопрос о "if"
// Какие из перечисленных ниже alert выполнятся?
// Какие конкретно значения будут результатами выражений в условиях if(...)?

if (-1 || 0) alert( 'first' ); // Выполнится
if (-1 && 0) alert( 'second' ); // Не выполнится
if (null || -1 && 1) alert( 'third' ); // Выполнится

// Проверка логина
// Напишите код, который будет спрашивать логин с помощью prompt.

// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».

let login = prompt("Кто там", '');

if (login === 'Админ') {
    let password = prompt('Введите пароль', '');
    if (password === 'Я главный') {
        alert('Здравствуйте');
    } else if (password === '' || password === null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (login === '' || login === null) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}


