'use strict';

var myMap;

ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        center: [59.959528, 30.304862],
        zoom: 15,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    });

    var myPlacemark = new ymaps.Placemark(myMap.getCenter(),{},{

        iconLayout: 'default#image',
        iconImageHref: '/img/icons/map_point.svg',
        iconImageSize: [40, 65],
        iconImageOffset: [-5, -60]
    });

    myMap.geoObjects.add(myPlacemark);
}