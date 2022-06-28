'use strict'

// Найдите координаты точек относительно окна браузера

document.onclick = function(e) { // показывает координаты точки клика
    coords.innerHTML = e.clientX + ':' + e.clientY;
  };

  let fieldCoords = field.getBoundingClientRect();

  let answer1 = [fieldCoords.left, fieldCoords.top];
  let answer2 = [fieldCoords.right, fieldCoords.bottom];
  let answer3 = [fieldCoords.left + field.clientLeft,
                    fieldCoords.top + field.clientTop];
  let answer4 = [fieldCoords.left + field.clientLeft + field.clientWidth,
                    fieldCoords.top + field.clientTop + field.clientHeight];


  console.log(answer1);
  console.log(answer2);
  console.log(answer3);
  console.log(answer4);


//   Покажите заметку рядом с элементом


function positionAt(anchor, position, elem) {

    let anchorCoords = anchor.getBoundingClientRect();

    switch (position) {
      case "top":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
        break;

      case "right":
        elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
        break;

      case "bottom":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
        break;
    }

  }

  function showNote(anchor, position, html) {

    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
  }

  let blockquote = document.querySelector('blockquote');

  showNote(blockquote, "top", "note above");
  showNote(blockquote, "right", "note at the right");
  showNote(blockquote, "bottom", "note below");


//   Покажите заметку около элемента (абсолютное позиционирование)


function getCoords1(elem) {
    let box = elem.getBoundingClientRect();

    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }

  function positionAt1(anchor, position, elem) {

    let anchorCoords = getCoords1(anchor);

    switch (position) {
      case "top":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
        break;

      case "right":
        elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
        break;

      case "bottom":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
        break;
    }

  }

  function showNote1(anchor, position, html) {

    let note = document.createElement('div');
    note.className = "note1";
    note.innerHTML = html;
    document.body.append(note);

    positionAt1(anchor, position, note);
  }

  let blockquote1 = document.querySelector('.blockquote1');

  showNote1(blockquote1, "top", "note above");
  showNote1(blockquote1, "right", "note at the right");
  showNote1(blockquote1, "bottom", "note below");


//   Расположите заметку внутри элемента (абсолютное позиционирование)


function getCoords2(elem) {
    let box = elem.getBoundingClientRect();

    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }

  function showNote2(anchor, position, html) {

    let note = document.createElement('div');
    note.className = "note1";
    note.innerHTML = html;
    document.body.append(note);

    positionAt2(anchor, position, note);
  }

  function positionAt2(anchor, position, elem) {

    let anchorCoords = getCoords2(anchor);

    switch (position) {
      case "top-out":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
        break;

      case "right-out":
        elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
        break;

      case "bottom-out":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
        break;

      case "top-in":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + "px";
        break;

      case "right-in":
        elem.style.width = '150px';
        elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
        break;

      case "bottom-in":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
        break;
    }

  }


  let blockquote2 = document.querySelector('.blockquote2');

  showNote2(blockquote, "top-in", "note top-in");
  showNote2(blockquote, "top-out", "note top-out");
  showNote2(blockquote, "right-out", "note right-out");
  showNote2(blockquote, "bottom-in", "note bottom-in");






