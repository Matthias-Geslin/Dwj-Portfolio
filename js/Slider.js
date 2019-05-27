'use strict';

var Slider = function () {
    this.moveInSlide();
    this.playPauseSlide();
    this.playSlide();
    this.pauseSlide();
};


var slideIndex = 1;
Slider.prototype.moveInSlide = function (number) {
    let i;
    const picInSlide = document.getElementsByClassName("picture");

    // Toggle the slide
    function moveInSlide(number) {
        slideIndex += number;
    }

    if (number > picInSlide.length) {
        slideIndex = 1;
    }

    if (number < 1) {
        slideIndex = picInSlide.length;
    }

    for (i = 0; i < picInSlide.length; i++) {
        picInSlide[i].style.display = "none";
    }
    picInSlide[slideIndex-1].style.display = "block";

    // Manual keypress slide move
    window.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) {
            return;
        }

        switch (event.key) {
            case "ArrowLeft":
                Slider.prototype.moveInSlide(slideIndex -=1);
                break;
            case "ArrowRight":
                Slider.prototype.moveInSlide(slideIndex +=1);
                break;
            default:
                return;
        }

        event.preventDefault();
    }, true);
};


Slider.prototype.playPauseSlide = function () {
    let time;
    const playInSlide = document.getElementById("play");
    const pauseInSlide = document.getElementById("pause");

    // Slide Play effect
    this.playSlide = function () {
        playInSlide.addEventListener('click', function () {
            time = window.setInterval(autoInSlide, 3000);
            pauseInSlide.classList.remove('disabled');
            playInSlide.classList.add('disabled');
        });
    };

    function autoInSlide() {
        Slider.prototype.moveInSlide(slideIndex +=1);
    }

    // Slide pause effect
    this.pauseSlide = function () {
        pauseInSlide.addEventListener('click', function () {
            window.clearInterval(time);
            pauseInSlide.classList.add('disabled');
            playInSlide.classList.remove('disabled');
        })};
};