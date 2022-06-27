'use strict'

// Вот документ с таблицей и формой.

// Как найти?…

//1. Таблицу с id="age-table".
//2. Все элементы label внутри этой таблицы (их три).
//3. Первый td в этой таблице (со словом «Age»).
//4. Форму form с именем name="search".
//5. Первый input в этой форме.
//6. Последний input в этой форме.

//1. let table = document.querySelector('#age-table')
//2. document.querySelectorAll('#age-table label')
//3. table.querySelector('td')
//4. let form = document.querySelector('form[name="search"]')
//5. form.querySelector('input')
//6. let inputs = form.querySelectorAll('input') // найти все input
//   inputs[inputs.length-1]


