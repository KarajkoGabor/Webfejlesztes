
(function() {

  $().ready(function() {
    module("FizzBuzzBizz generátor");
    test("3==fizz", function() {
      return equal(fbb(3), 3 +' : fizz');
    });
    test("15==fizzbuzz", function() {
      return equal(fbb(15), 15 +' : fizzbuzz');
    });
    test("21==fizzbizz", function() {
      return equal(fbb(21), 21 +' : fizzbizz');
    });
    test("80==buzz", function() {
      return equal(fbb(80), 80 +' : buzz');
    });
    test("91==bizz", function() {
      return equal(fbb(91), 91 +' : bizz');
    });
    test("35==buzzbizz", function() {
      return equal(fbb(35), 35 +' : buzzbizz');
    });
    return test("13==13", function() {
      return equal(fbb(13), 13);
    });
  });

}).call(this);
