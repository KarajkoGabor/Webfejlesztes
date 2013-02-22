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

  function fbb(number){
    counter = 0;
    if((number%3)== 0)
        counter = number + ' : fizz';
    if((number%5)== 0)
        counter = number + ' : buzz';
    if((number%7)== 0)
         counter = number + ' : bizz';
    if((number%3)== 0 && (number%5)==0)
         counter = number + ' : fizzbuzz';
    if((number%3)== 0 && (number%7)==0)
         counter = number + ' : fizzbizz';
    if((number%7)== 0 && (number%5)==0)
        counter = number + ' : buzzbizz';
    if((number%3)== 0 && (number%5)==0 && (number%7)==0)
         counter = number + ' : fizzbuzzbizz';
    if(counter == 0)
         counter = number;


  }

  function fBBWriter(){

           for (i = 1; i <= 100; i++) {
                //fbb(i);   
                counter = 0;
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
    if(counter == 0)
         counter = i;
                createNewOutput(counter);
            }    
    
} 

  function onClick() {
    fBBWriter();
  }



  function setUp() {
    //gomb = document.getElementById('gomb');
    outputContainer = document.getElementById('output');
    //gomb.addEventListener('click', onClick);
    fBBWriter();
  }
  return setUp;
})();

document.addEventListener('DOMContentLoaded', fizzBuzzBizz);