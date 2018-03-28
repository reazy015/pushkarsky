'use strict';

window.tourPage = ( function () {
    var videoContainerIframe = document.querySelector('.video-container iframe');

    videoContainerIframe.addEventListener('scroll', function () {
        videoContainerIframe.style.pointerEvents = 'none';
    })

    videoContainerIframe.addEventListener('click', function () {
        videoContainerIframe.style.pointerEvents = 'auto';
    })
})();