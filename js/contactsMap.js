'use strict';

var myContactsMap;

ymaps.ready(init);

function init () {
    myContactsMap = new ymaps.Map('map-contacts', {
        center: [59.959528, 30.304862],
        zoom: 15,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    });

    var myPlacemark = new ymaps.Placemark(myContactsMap.getCenter(),{},{

        iconLayout: 'default#image',
        iconImageHref: './img/icons/map_point.svg',
        iconImageSize: [40, 65],
        iconImageOffset: [-5, -60]
    });

    myContactsMap.geoObjects.add(myPlacemark);
    myContactsMap.behaviors.disable('scrollZoom');
}