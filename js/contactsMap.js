'use strict';

var myContactsMap;

ymaps.ready(init);

function init () {
    myContactsMap = new ymaps.Map('map-contacts', {
        center: [59.959528, 30.304862],
        zoom: 18,
        controls: ['zoomControl', 'searchControl', 'typeSelector',  'fullscreenControl', 'routeButtonControl']
    }, {
        searchControlProvider: 'yandex#search'
    });

    var myPlacemark = new ymaps.Placemark(myContactsMap.getCenter(),{},{

        iconLayout: 'default#image',
        iconImageHref: './img/icons/map_point.svg',
        iconImageSize: [40, 65],
        iconImageOffset: [20, -70]
    });

    myContactsMap.geoObjects.add(myPlacemark);
    myContactsMap.behaviors.disable('scrollZoom');
}