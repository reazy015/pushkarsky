'use strict';

window.geoInfoPanel = ( function () {
    var geoPanel = document.querySelector('.geo-info-panel');
    var geoPanelItemsList = geoPanel.querySelectorAll('.geo-info-panel__item');

    function disableActiveItems() {
        for (var i = 0; i < geoPanelItemsList.length; i++) {
            geoPanelItemsList[i].classList.remove('geo-info-panel__item--active');
        }
    }

    function markAsActive(evt) {
        var target = evt.target;
        disableActiveItems();

        target.classList.add('geo-info-panel__item--active');
    }

    for (var i = 0; i < geoPanelItemsList.length; i++) {
        geoPanelItemsList[i].addEventListener('click', markAsActive);
    }
})();