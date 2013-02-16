var gomb, outputContainer;
var counter = 0;
var w = 600, h = 400; // width and height


function createNewOutput(msg) {
  var li = document.createElement('li');
  li.innerHTML = msg;
  outputContainer.appendChild(li);
}

function onClick(ev) {
  window.alert("Ügyes vagy! De lehet hogy csaltál ;) ");
}

function onMouseMove(ev){

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
window.setTimeout( "setbackground()", 5000); // 5000 milliseconds delay

var index = Math.round(Math.random() * 9);

var ColorValue = "FFFFFF"; // default color - white (index = 0)

if(index == 1)
ColorValue = "FFCCCC"; //peach
if(index == 2)
ColorValue = "CCAFFF"; //violet
if(index == 3)
ColorValue = "A6BEFF"; //lt blue
if(index == 4)
ColorValue = "99FFFF"; //cyan
if(index == 5)
ColorValue = "D5CCBB"; //tan
if(index == 6)
ColorValue = "99FF99"; //lt green
if(index == 7)
ColorValue = "FFFF99"; //lt yellow
if(index == 8)
ColorValue = "FFCC99"; //lt orange
if(index == 9)
ColorValue = "CCCCCC"; //lt grey

document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;

}

function setUp() {
  //outputContainer = document.getElementById('output');
  gomb = document.getElementById('gomb');
  gomb.addEventListener('mousemove', onMouseMove);
  gomb.addEventListener('click', onClick);
}
document.addEventListener('DOMContentLoaded', setUp);