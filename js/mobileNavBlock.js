'use strict';

function MobileNav(toggle, navBlock) {
    this.toggle = toggle;
    this.navBlock = navBlock;
    this.toggle.addEventListener('click', openMenu);
    var self = this;


    function openMenu() {
        var currentSlider = document.querySelector('.slick-slider') || false;

        document.body.classList.toggle('no-scroll');
        navBlock.classList.toggle('header-nav--open');
        self.navBlock.classList.toggle('header-nav--mobile');
        self.toggle.classList.toggle('header-nav-btn--open');

        if (currentSlider) {
            currentSlider.classList.toggle('hidden');
        }
    }
}

new MobileNav(document.querySelector('.header-nav-btn'), document.querySelector('.header-nav'));