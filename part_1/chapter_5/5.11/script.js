'use strict'

// Создайте дату

let date = new Date(2012, 1, 20, 3, 12);
console.log( date );

// Покажите день недели

function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}

let date1 = new Date(2012, 0, 3);
console.log( getWeekDay(date1) );

// День недели в европейской нумерации

function getLocalDay(date) {

  let day = date.getDay();

  if (day == 0) {
    day = 7;
  }

  return day;
}

let date2 = new Date(2012, 0, 3);
console.log( getLocalDay(date2) );


// Какой день месяца был много дней назад?

function getDateAgo(date, days) {
  let newDate = new Date(date);

  newDate.setDate(date.getDate() - days);
  return newDate.getDate();
}

let date3 = new Date(2015, 0, 2);

console.log( getDateAgo(date3, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date3, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date3, 365) ); // 2, (2 Jan 2014)

// Последнее число месяца?

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

console.log( getLastDayOfMonth(2012, 0) );
console.log( getLastDayOfMonth(2012, 1) );
console.log( getLastDayOfMonth(2013, 1) );


// Сколько сегодня прошло секунд?

function getSecondsToday() {
  let d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

console.log( getSecondsToday() );

// Сколько секунд осталось до завтра?

function getSecondsToTomorrow() {
  let now = new Date(),
  hour = now.getHours(),
  minutes = now.getMinutes(),
  seconds = now.getSeconds(),
  totalSecondsToday = (hour * 60 + minutes) * 60 + seconds,
  totalSecondsInADay = 86400;

  return totalSecondsInADay - totalSecondsToday;
}

console.log(getSecondsToTomorrow());

// Форматирование относительной даты

function formatDate(date) {
  let dayOfMonth = date.getDate(),
      month = date.getMonth() + 1,
      year = date.getFullYear(),
      hour = date.getHours(),
      minutes = date.getMinutes(),
      diffMs = new Date() - date,
      diffSec = Math.round(diffMs / 1000),
      diffMin = diffSec / 60,
      diffHour = diffMin / 60;

  year = year.toString().slice(-2);
  month = month < 10 ? '0' + month : month;
  dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  if (diffSec < 1) {
    return 'прямо сейчас';
  } else if (diffMin < 1) {
    return `${diffSec} сек. назад`
  } else if (diffHour < 1) {
    return `${diffMin} мин. назад`
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
  }
}

console.log( formatDate(new Date(new Date - 1)) );

console.log( formatDate(new Date(new Date - 30 * 1000)) );

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) );

console.log( formatDate(new Date(new Date - 86400 * 1000)) );


