'use strict';

var callbackBlock = document.querySelector('.callback-block');

callbackBlock.addEventListener('click', function () {
  window.open(
    'downloads/newmenu.pdf',
    '_blank' // <- This is what makes it open in a new window.
  );
  console.log(true);
});