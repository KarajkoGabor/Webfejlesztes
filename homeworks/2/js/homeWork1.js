var gomb, outputContainer;
var counter = 0;
var gomb = document.getElementById('gomb');
var w = 600, h = 400; // width and height

function createNewOutput(msg) {
  var li = document.createElement('li');
  li.innerHTML = msg;
  outputContainer.appendChild(li);
}

function onClick(ev) {
  //createNewOutput( ++counter + '. kattintás');
  onMouseMove();
}

function onMouseMove(){
  newWidth = Math.floor(Math.random()*w);
  newHeight = Math.floor(Math.random()*h);
  gomb.style.position="absolute";
  gomb.style.left=newWidth+"px";
  gomb.style.top=newHeight+"px";
}

function setUp() {
  //outputContainer = document.getElementById('output');
  gomb.addEventListener('click', onClick);
}

document.addEventListener('DOMContentLoaded', setUp);