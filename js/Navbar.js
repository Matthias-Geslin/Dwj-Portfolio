'use strict';

var NavBar = function () {
    this.navSelector();
    this.homeInSelector();
    this.portfolioInSelector();
    this.contactInSelector();
};

NavBar.prototype.navSelector = function () {
    const homeSelector = document.getElementById("home");
    const homeBoxSelector = document.getElementById("home-box");

    const portfolioSelector = document.getElementById("portfolio");
    const portfolioBoxSelector = document.getElementById("portfolio-box");

    const contactSelector = document.getElementById("contact");
    const contactBoxSelector = document.getElementById("contact-box");


    this.homeInSelector = function () {
        homeSelector.addEventListener('click', function (e) {
            homeBoxSelector.classList.remove('disabled');
            portfolioBoxSelector.classList.add('disabled');
            contactBoxSelector.classList.add('disabled');
        });
    };

    this.portfolioInSelector = function () {
        portfolioSelector.addEventListener('click', function () {
            homeBoxSelector.classList.add('disabled');
            portfolioBoxSelector.classList.remove('disabled');
            contactBoxSelector.classList.add('disabled');
        });
    };

    this.contactInSelector = function () {
        contactSelector.addEventListener('click', function () {
            homeBoxSelector.classList.add('disabled');
            portfolioBoxSelector.classList.add('disabled');
            contactBoxSelector.classList.remove('disabled');
        });
    };
};