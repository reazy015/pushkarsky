'use strict';

window.scrollAnimation = ( function () {

    function showAdvantagesBlock() {
        if (window.pageYOffset > 400 && window.innerWidth > 1024) {
            alert('TEST!');
        }
    }

    window.addEventListener('scroll', showAdvantagesBlock);
})()