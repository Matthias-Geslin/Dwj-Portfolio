'use strict';

class Slider {
    constructor(containerID) {
        this.container = document.getElementById(containerID) || document.body;
        this.slides = this.container.querySelectorAll('.picture');
        this.total = this.slides.length - 1;
        this.current = 0;

        this.playInSlide = document.getElementById("play");
        this.pauseInSlide = document.getElementById("pause");

        // start on slide 1
        this.slide(this.current);

        document.getElementById("prev-lb").addEventListener("click", this.prev.bind(this));
        document.getElementById("next-lb").addEventListener("click", this.next.bind(this));
        document.getElementById("play").addEventListener("click", this.play.bind(this));
        document.getElementById("pause").addEventListener("click", this.stop.bind(this));
        document.addEventListener("keydown", this.keyControl.bind(this));
    }
}


// Keyboard control
Slider.prototype.keyControl = function() {
    document.addEventListener('keydown', event => {
        if (event.defaultPrevented) {
            return;
        }
        if (event.key === "ArrowLeft"){
            this.prev();
        }
        else if (event.key === "ArrowRight") {
            this.next();
        }
        event.preventDefault();
    });
};


// Previous
Slider.prototype.prev = function (interval) {
    (this.current === 0) ? this.current = this.total : this.current --;

    this.stop();
    this.slide(this.current);

    if(typeof interval === 'number' && (interval % 1) === 0) {
        var context = this;
        this.run = setTimeout(function() {
            context.prev(interval);
        }, interval);
    }
};


// Next
Slider.prototype.next = function (interval) {
    (this.current === this.total) ? this.current = 0 : this.current ++;

    this.stop();
    this.slide(this.current);

    if(typeof interval === 'number' && (interval % 1) === 0) {
        var context = this;
        this.run = setTimeout(function() {
            context.next(interval);
        }, interval);
        this.pauseInSlide.classList.remove('hide');
        this.playInSlide.classList.add('hide');
    }
};


// Play
Slider.prototype.play = function () {
    this.next(5000);
};


// Stop Playing
Slider.prototype.stop = function () {
    clearTimeout(this.run);
    this.pauseInSlide.classList.add('hide');
    this.playInSlide.classList.remove('hide');
};


// Manual slide selection
Slider.prototype.slide = function (index) {
    if (index >= 0 && index <= this.total) {
        this.stop();
        for (var s = 0; s <= this.total; s++) {
            if (s === index) {
                this.slides[s].style.display = "inline-block";
            } else {
                this.slides[s].style.display = 'none';
            }
        }
    } else {
        alert("Index " + index + " doesn't exist. Available : 0 - " + this.total);
    }
};







// 'use strict';
//
// var Slider = function () {
//     this.moveInSlide();
//     this.playPauseSlide();
//     this.playSlide();
//     this.pauseSlide();
// };
//
//
// var slideIndex = 1;
// Slider.prototype.moveInSlide = function (number) {
//     let i;
//     const picInSlide = document.getElementsByClassName("picture");
//
//     // Toggle the slide
//     function moveInSlide(number) {
//         slideIndex += number;
//     }
//
//     if (number > picInSlide.length) {
//         slideIndex = 1;
//     }
//
//     if (number < 1) {
//         slideIndex = picInSlide.length;
//     }
//
//     for (i = 0; i < picInSlide.length; i++) {
//         picInSlide[i].style.display = "none";
//     }
//     picInSlide[slideIndex-1].style.display = "block";
//
//     // Manual keypress slide move
//     window.addEventListener("keydown", function (event) {
//         if (event.defaultPrevented) {
//             return;
//         }
//
//         switch (event.key) {
//             case "ArrowLeft":
//                 Slider.prototype.moveInSlide(slideIndex -=1);
//                 break;
//             case "ArrowRight":
//                 Slider.prototype.moveInSlide(slideIndex +=1);
//                 break;
//             default:
//                 return;
//         }
//
//         event.preventDefault();
//     }, true);
// };
//
//
// Slider.prototype.playPauseSlide = function () {
//     let time;
//     const playInSlide = document.getElementById("play");
//     const pauseInSlide = document.getElementById("pause");
//
//     // Slide Play effect
//     this.playSlide = function () {
//         playInSlide.addEventListener('click', function () {
//             time = window.setInterval(autoInSlide, 3000);
//             pauseInSlide.classList.remove('disabled');
//             playInSlide.classList.add('disabled');
//         });
//     };
//
//     function autoInSlide() {
//         Slider.prototype.moveInSlide(slideIndex +=1);
//     }
//
//     // Slide pause effect
//     this.pauseSlide = function () {
//         pauseInSlide.addEventListener('click', function () {
//             window.clearInterval(time);
//             pauseInSlide.classList.add('disabled');
//             playInSlide.classList.remove('disabled');
//         })};
// };