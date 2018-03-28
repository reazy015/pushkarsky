'use strict';

window.geoInfoPanel = ( function () {
    var geoPanel = document.querySelector('.geo-info-panel');
    var geoPanelItemsList = geoPanel.querySelectorAll('.geo-info-panel__item');
    var geoIconsList = geoPanel.querySelectorAll('.geo-icon');
    var geoInfoBoxList = document.querySelectorAll('.geo-info-item');

    function disableActiveItems() {
        for (var i = 0; i < geoPanelItemsList.length; i++) {
            geoPanelItemsList[i].classList.remove('geo-info-panel__item--active');
        }
    }

    function disableActiveIcons() {
        for (var i = 0; i < geoIconsList.length; i++) {
            geoIconsList[i].classList.remove('geo-icon--active');
        }
    }

    function findAppropriateInfoBox(name) {
        for (var i = 0; i < geoInfoBoxList.length; i++) {
            if ( geoInfoBoxList[i].dataset.target == name) {
               return geoInfoBoxList[i];
            }
        }
    }

    function removeCurrentInfoBlock() {
        for (var i = 0; i < geoInfoBoxList.length; i++) {
            geoInfoBoxList[i].classList.remove('geo-info-item--active');
        }
    }

    function markAsActive(evt) {
        var target = evt.target;
        disableActiveItems();
        disableActiveIcons();
        removeCurrentInfoBlock();

        findAppropriateInfoBox(target.closest('.geo-info-panel__item').dataset.target).classList.add('geo-info-item--active');

       target.closest('.geo-info-panel__item').classList.add('geo-info-panel__item--active');
       target.closest('.geo-icon').classList.add('geo-icon--active');

    }


    for (var i = 0; i < geoIconsList.length; i++) {
        geoIconsList[i].addEventListener('click', markAsActive);
    }
})();