/*global document*/
var fizzBuzzBizz = (function () {
  "use strict";
  var gomb, outputContainer;
  var counter = 0;
  var i = 0;

  function createNewOutput(msg) {
    var li = document.createElement('li');
    li.innerHTML = msg;
    outputContainer.appendChild(li);
  }

  function fBBWriter(){

           for (i = 1; i <= 100; i++) {
                    if((i%3)== 0)
                        counter = i + ' : fizz';
                createNewOutput(counter);
            }    
    
} 

  function onClick() {
    fBBWriter();
  }



  function setUp() {
    gomb = document.getElementById('gomb');
    outputContainer = document.getElementById('output');
    gomb.addEventListener('click', onClick);
  }
  return setUp;
})();

document.addEventListener('DOMContentLoaded', fizzBuzzBizz);