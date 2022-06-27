'use strict'

// Получите атрибут

let elem = document.querySelector('[data-widget-name]');

console.log(elem.getAttribute('data-widget-name'));

// Сделайте внешние ссылки оранжевыми

let links = document.querySelectorAll('a');

for (let link of links) {
  let href = link.getAttribute('href');
  if (!href || !href.includes('://') 
      || href.startsWith('http://internal.com')) continue;

  link.style.color = 'orange';
}
