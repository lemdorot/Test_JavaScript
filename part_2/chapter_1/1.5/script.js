'use strict'

// Считаем потомков

for (let li of document.querySelectorAll('li')) {
    let title = li.firstChild.data;
    title = title.trim();

    let count = li.getElementsByTagName('li').length;

    console.log(title + ': ' + count);
  }


//   Что содержит свойство nodeType?

// Что выведет этот код?

// <html>

// <body>
//   <script>
//     alert(document.body.lastChild.nodeType);
//   </script>
// </body>

// </html>

// Ответ: 1



// Тег в комментарии

// Что выведет этот код?

// <script>
//   let body = document.body;

//   body.innerHTML = "<!--" + body.tagName + "-->";

//   alert( body.firstChild.data ); // что выведет?
// </script>

// Ответ: BODY


// Где в DOM-иерархии "document"?

alert(HTMLDocument.prototype.constructor.name); // HTMLDocument
alert(HTMLDocument.prototype.__proto__.constructor.name); // Document
alert(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node


