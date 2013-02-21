/*global document*/
var fizzBuzzBizz = (function () {
  "use strict";
  var gomb, outputContainer;
  var counter = 0;

  function createNewOutput(msg) {
    var li = document.createElement('li');
    li.innerHTML = msg;
    outputContainer.appendChild(li);
  }

  function onClick() {
    createNewOutput("out");
  }

  function fBBWriter(){

            for (var i = 0; i < 100; i++) {
                    if((i % 3) == 0{
                        Output(i + ": fizz");
                        fizzOut = i + ": fizz";
                    }else if((i % 7) == 0){
                        //Output(i + ": bizz");
                        fizzOut = i + ": bizz";
                    }else if ((i%5) == 0){
                        //Output(i + ": buzz");
                        fizzOut = i + ": buzz";
                    }

                    if((i%3)==0 && (i%5) == 0)) {
                        fizzOut = fizzOut + "buzz";
                    }else if((i%3)==0 && (i%7) == 0)) {
                        fizzOut = fizzOut + "bizz";
                    }else if((i%5)==0 && (i%7) == 0)) {
                        fizzOut = fizzOut + "bizz";
                    }

                    if((i%3)==0 && (i%5) == 0) && (i%7)==0){
                        fizzOut = i + ": fizzbuzzbizz";
                    }
                    createNewOutput(fizzOut);
                }    

        } 

  function setUp() {
    gomb = document.getElementById('gomb');
    outputContainer = document.getElementById('output');
    gomb.addEventListener('click', onClick);
  }
  return setUp;
})();

document.addEventListener('DOMContentLoaded', fizzBuzzBizz);