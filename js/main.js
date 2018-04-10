'use strict';

var menuBlock = document.querySelector('.menu-download-block--menu');
var vineMenuBlock = document.querySelector('.menu-download-block--vine');

menuBlock.addEventListener('click', function() {
  window.open(
    'downloads/newmenu.pdf',
    '_blank' // <- This is what makes it open in a new window.
  );
});

vineMenuBlock.addEventListener('click', function () {
  window.open(
    'downloads/newmenu.pdf',
    '_blank' // <- This is what makes it open in a new window.
  );
});
