'use strict';

function MobileNav(toggle, navBlock) {
    this.toggle = toggle;
    this.navBlock = navBlock;
    this.toggle.addEventListener('click', openMenu);
    var self = this;

    function openMenu() {
        document.body.classList.toggle('no-scroll');
        self.navBlock.classList.toggle('header-nav--mobile');
        self.toggle.classList.toggle('header-nav-btn--open');
    }
}

new MobileNav(document.querySelector('.header-nav-btn'), document.querySelector('.header-nav'));