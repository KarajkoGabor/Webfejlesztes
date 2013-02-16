var clickMe = {
  gomb:null;

  onClick:function(ev) { //click
    window.alert("Ügyes vagy! De lehet hogy csaltál ;) ");
  }

  onMouseMove:function(ev){

    var w = 800, h = 600; // width and height

    clickMe.gomb = document.getElementById('gomb'); //gomb
    newWidth = Math.floor(Math.random()*w); //random width
    newHeight = Math.floor(Math.random()*h); //random height
    clickMe.gomb.style.position="absolute"; //position
    clickMe.gomb.style.left=newWidth+"px"; //left align
    clickMe.gomb.style.top=newHeight+"px"; //top align

    clickMe.setbackground(); // random background when hovering the button
  }

  setbackground:function ()
  {
    var letters = '0123456789ABCDEF'.split(''); // letters
    var color = '#'; // hex first letter
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)]; //random numbers
    }

  document.getElementsByTagName("body")[0].style.backgroundColor = color; //set the color

  }

  setUp:function () {
    clickMe.gomb = document.getElementById('gomb'); 
    clickMe.gomb.addEventListener('mousemove', clickMe.onMouseMove); //hovering listener
    clickMe.gomb.addEventListener('click', clickMe.onClick); //click listener
  }

}
document.addEventListener('DOMContentLoaded', clickMe.setUp); //if content loaded
