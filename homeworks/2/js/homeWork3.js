var clickMe = (function () {
        "use strict";

        /*jslint browser:true */
        /*global document: false */
        var gomb;

        function setbackground() {
            var letters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'],  //letters
                color = '#', // hex first letter
                i;

            for (i = 0; i < 6; i += 1) {
                color += letters[Math.round(Math.random() * 15)]; //random numbers(15 because the number of 'letters' array elements)
            }

            document.getElementsByTagName("body")[0].style.backgroundColor = color; //set the color
        }

        function onClick() { //click
            window.alert("Ügyes vagy! De lehet hogy csaltál ;) ");
        }

        function onMouseMove() {

            var w = 800,
                h = 600,
                newWidth = Math.floor(Math.random() * w),
                newHeight = Math.floor(Math.random() * h);

            gomb = document.getElementById('gomb'); //gomb
            gomb.style.position = "absolute"; //position
            gomb.style.left = newWidth + "px"; //left align
            gomb.style.top = newHeight + "px"; //top align

            setbackground(); // random background when hovering the button
        }

        function setUp() {
            gomb = document.getElementById('gomb');
            gomb.addEventListener('mousemove', onMouseMove); //hovering listener
            gomb.addEventListener('click', onClick); //click listener
        }

        return setUp;

    }());
document.addEventListener('DOMContentLoaded', clickMe); //if content loaded

