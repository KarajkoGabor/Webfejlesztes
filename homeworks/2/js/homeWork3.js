
var clickMe = (function(){
  "use strict";
var gomb;


function onClick() { //click
  window.alert("Ügyes vagy! De lehet hogy csaltál ;) ");
}

function onMouseMove(){

  var w = 800, h = 600; // width and height

  gomb = document.getElementById('gomb'); //gomb
  var newWidth = Math.floor(Math.random()*w); //random width
  var newHeight = Math.floor(Math.random()*h); //random height
  gomb.style.position="absolute"; //position
  gomb.style.left=newWidth+"px"; //left align
  gomb.style.top=newHeight+"px"; //top align

  setbackground(); // random background when hovering the button
}

function setbackground()
{
    var letters = '0123456789ABCDEF'.split(''); // letters
    var color = '#'; // hex first letter
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)]; //random numbers
    }

document.getElementsByTagName("body")[0].style.backgroundColor = color; //set the color

}

function setUp() {
  //outputContainer = document.getElementById('output');
  gomb = document.getElementById('gomb'); 
  gomb.addEventListener('mousemove', onMouseMove); //hovering listener
  gomb.addEventListener('click', onClick); //click listener
}
  return setUp;

})();
document.addEventListener('DOMContentLoaded', clickMe); //if content loaded