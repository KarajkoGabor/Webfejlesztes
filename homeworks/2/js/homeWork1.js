var gomb;

function createNewOutput(msg) {
  var li = document.createElement('li');
  li.innerHTML = msg;
  outputContainer.appendChild(li);
}

function onClick(ev) {
  window.alert("Ügyes vagy! De lehet hogy csaltál ;) ");
}

function onMouseMove(ev){

  var w = 800, h = 600; // width and height

  gomb = document.getElementById('gomb');
  newWidth = Math.floor(Math.random()*w);
  newHeight = Math.floor(Math.random()*h);
  gomb.style.position="absolute";
  gomb.style.left=newWidth+"px";
  gomb.style.top=newHeight+"px";

  setbackground();
}



function setbackground()
{
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }

document.getElementsByTagName("body")[0].style.backgroundColor = color;

}

function setUp() {
  //outputContainer = document.getElementById('output');
  gomb = document.getElementById('gomb');
  gomb.addEventListener('mousemove', onMouseMove);
  gomb.addEventListener('click', onClick);
}
document.addEventListener('DOMContentLoaded', setUp);