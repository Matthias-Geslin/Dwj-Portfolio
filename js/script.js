'use strict';

document.addEventListener('DOMContentLoaded', function (e) {
    // Create and launch the slider
    var slider = new Slider();
    slider.moveInSlide();

    var navBar = new NavBar();
    navBar.navSelector();
});