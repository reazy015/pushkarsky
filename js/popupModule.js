'use strict';

window.popupModule = ( function () {
    var popup = document.querySelector('.popup');
    var popupCloseBtn = popup.querySelector('.popup-module-close');

    function showPopup(evt) {
        evt.stopPropagation();
        var target = evt.target;

        if (target.classList.contains('order-btn')) {
            popup.style.display = 'block';
            popup.classList.add('show');
            document.body.classList.add('no-scroll--popup');
            popupCloseBtn.addEventListener('click', closePopup);
            document.addEventListener('click', closePopup);
        }
    }

    function closePopup(evt) {
        evt.stopPropagation();

        popup.classList.add('hide');
        setTimeout(function() {
            popup.classList.remove('show');
            popup.classList.remove('hide');
            popup.style.display = 'none';
        }, 400);

        document.body.classList.remove('no-scroll--popup');
        document.removeEventListener('click', closePopup);
    }

    document.addEventListener('click', showPopup);

})();