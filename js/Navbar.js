'use strict';

var Navbar = function () {
    this.navSelector();
    this.homeInSelector();
    this.portfolioInSelector();
    this.contactInSelector();
};

Navbar.prototype.navSelector = function () {
    const homeSelector = document.getElementById("home");
    const homeBoxSelector = document.getElementById("home-box");

    const portfolioSelector = document.getElementById("portfolio");
    const portfolioBoxSelector = document.getElementById("portfolio-box");

    const aboutSelector = document.getElementById("about");
    const aboutBoxSelector = document.getElementById("about-box");


    this.homeInSelector = function () {
        homeSelector.addEventListener('click', function (e) {
            homeBoxSelector.classList.remove('hide');
            portfolioBoxSelector.classList.add('hide');
            aboutBoxSelector.classList.add('hide');
        });
    };

    this.portfolioInSelector = function () {
        portfolioSelector.addEventListener('click', function () {
            homeBoxSelector.classList.add('hide');
            portfolioBoxSelector.classList.remove('hide');
            aboutBoxSelector.classList.add('hide');
        });
    };

    this.contactInSelector = function () {
        aboutSelector.addEventListener('click', function () {
            homeBoxSelector.classList.add('hide');
            portfolioBoxSelector.classList.add('hide');
            aboutBoxSelector.classList.remove('hide');
        });
    };
};