'use strict';

var myMap;
var MyIconContentLayout;

ymaps.ready(init);

function init () {
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),
    myMap = new ymaps.Map('map', {
        center: [59.960494, 30.305978],
        zoom: 18,
        controls: ['zoomControl', 'searchControl', 'typeSelector',  'fullscreenControl', 'routeButtonControl']
    }, {
        searchControlProvider: 'yandex#search'
    });

    var myPlacemark = new ymaps.Placemark([59.960494, 30.305978],{
      hintContent: 'Мы находимся по адресу: Большая Пушкарская ул., 38'
    },{
        iconLayout: 'default#image',
        iconImageHref: './img/icons/map_point.svg',
        iconImageSize: [40, 65],
        iconImageOffset: [-20, -70],
        iconContentLayout: MyIconContentLayout
    });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
}