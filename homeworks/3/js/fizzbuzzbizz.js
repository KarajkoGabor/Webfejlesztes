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
                    if((i%5)== 0)
                        counter = i + ' : buzz';
                    if((i%7)== 0)
                        counter = i + ' : bizz';
                    if((i%3)== 0 && (i%5)==0)
                        counter = i + ' : fizzbuzz';
                    if((i%3)== 0 && (i%7)==0)
                        counter = i + ' : fizzbizz';
                    if((i%7)== 0 && (i%5)==0)
                        counter = i + ' : buzzbizz';
                    if((i%3)== 0 && (i%5)==0 && (i%7)==0)
                        counter = i + ' : fizzbuzzbizz';
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