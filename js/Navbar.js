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
            homeBoxSelector.classList.remove('disabled');
            portfolioBoxSelector.classList.add('disabled');
            aboutBoxSelector.classList.add('disabled');
        });
    };

    this.portfolioInSelector = function () {
        portfolioSelector.addEventListener('click', function () {
            homeBoxSelector.classList.add('disabled');
            portfolioBoxSelector.classList.remove('disabled');
            aboutBoxSelector.classList.add('disabled');
        });
    };

    this.contactInSelector = function () {
        aboutSelector.addEventListener('click', function () {
            homeBoxSelector.classList.add('disabled');
            portfolioBoxSelector.classList.add('disabled');
            aboutBoxSelector.classList.remove('disabled');
        });
    };
};