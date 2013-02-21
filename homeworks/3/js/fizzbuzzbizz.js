var fizzBuzzBizz = (function () {
        "use strict";
        var fizzOut, outputContainer,gomb;

        function createNewOutput(msg) {
            var li = document.createElement('li');
            li.innerHTML = msg;
            outputContainer.appendChild(li);
        }

        function onClick() {
            createNewOutput(++counter + '. kattintás');
        }

        /*function fBBWriter(){

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
                    Output(fizzOut);
                }    

        } */

        function setUp() {
            gomb = document.getElementById('gomb');

            outputContainer = document.getElementById('fbb_output');
            gomb.addEventListener('click', onClick); //click listener
        }


        return setUp;

    }());
document.addEventListener('DOMContentLoaded', fizzBuzzBizz); //if content loaded