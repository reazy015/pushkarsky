'use strict';

window.scrollAnimation = ( function () {
    var advantagesItem = document.querySelectorAll('.advantages-item');

    function showAdvantagesBlock() {
        if (window.pageYOffset > 300 && window.innerWidth > 1024) {
            for (var i = 0; i < advantagesItem.length; i++) {
                advantagesItem[i].classList.add('slideShow');
            }
            window.removeEventListener('scoll', showAdvantagesBlock);
        }
    }

    window.addEventListener('scroll', showAdvantagesBlock);
})()