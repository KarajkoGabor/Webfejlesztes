
(function() {

  $().ready(function() {
    module("FizzBuzzBizz generátor");
    test("3==fizz", function() {
      return equal(fbb(3), 'fizz');
    });
    /*test("1==1", function() {
      return equal(fibonacci(1), 1);
    });
    test("2==1", function() {
      return equal(fibonacci(2), 1);
    });
    test("5==5", function() {
      return equal(fibonacci(5), 5);
    });*/
    return test("13==13", function() {
      return equal(fbb(13), 13);
    });
  });

}).call(this);
