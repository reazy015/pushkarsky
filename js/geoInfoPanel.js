'use strict';

window.geoInfoPanel = ( function () {
    var geoPanel = document.querySelector('.geo-info-panel');
    var geoPanelItemsList = geoPanel.querySelectorAll('.geo-info-panel__item');
    var geoIconsList = geoPanel.querySelectorAll('.geo-icon');
    var geoInfoBoxList = document.querySelectorAll('.geo-info-item');
    var activeMarkerBlock = geoPanel.querySelector('.geo-info-panel__item--active-marker');
    var geoPanelCoords = {
        top: geoPanel.getBoundingClientRect().top,
        bottom: geoPanel.getBoundingClientRect().bottom,
        left: geoPanel.getBoundingClientRect().left,
        right: geoPanel.getBoundingClientRect().right
    };

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

    function getActiveBoxCoordinates(item) {
        return {
            topLeft: item.getBoundingClientRect().left - geoPanelCoords.left
        }
    }

    function markAsActive(evt) {
        var target = evt.target;
        disableActiveItems();
        disableActiveIcons();
        removeCurrentInfoBlock();

        activeMarkerBlock.style.left = getActiveBoxCoordinates(target.closest('.geo-info-panel__item')).topLeft + 'px';
        findAppropriateInfoBox(target.closest('.geo-info-panel__item').dataset.target).classList.add('geo-info-item--active');


       this.querySelector('.geo-icon').classList.add('geo-icon--active');


    }


    // for (var i = 0; i < geoIconsList.length; i++) {
    //     geoIconsList[i].addEventListener('click', markAsActive);
    // }

    for (var i = 0; i < geoPanelItemsList.length; i++) {
        geoPanelItemsList[i].addEventListener('click', markAsActive);
    }

    (function(){
        activeMarkerBlock.style.left = getActiveBoxCoordinates(geoPanel.querySelector('.geo-info-panel__item--active')).topLeft + 'px';
    })();
})();