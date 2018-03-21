'use strict';

window.sitePreloader = (function () {

    var percentIndicator = 0;
    var percentBlock = document.querySelector('.preloader-info-percent__number');
    var preloaderBlock = document.querySelector('.preloader');
    var id = setInterval(count, 30);

    function count() {
        document.body.classList.add('no-scroll');

        if (percentIndicator < 100) {
            percentIndicator++;
            percentBlock.textContent = percentIndicator;
        } else {
            clearInterval(id);
            document.body.classList.remove('no-scroll');
            preloaderBlock.style.opacity = 0;
            setTimeout(function () {
                preloaderBlock.style.display = 'none';
            }, 100);
        }
    }

})();