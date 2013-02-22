var counter;

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