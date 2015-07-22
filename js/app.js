// Fizz-Buzz //

var x = prompt("Please enter a number");
var fbNum = parseInt(x);

function fizzbuzz(max) {
  for ( var fbNum = 1; fbNum <= max; fbNum++ ) {
    if (fbNum % 3 == 0 && fbNum % 5 == 0) {
		$('html').append("<div>FizzBuzz</div>");
	} else if (fbNum % 5 == 0) {
		$('html').append("<div>Buzz</div>");
	} else if (fbNum % 3 == 0) {
		$('html').append("<div>Fizz</div>");
	} else {
		$('html').append("<div>"+fbNum +"</div>");
	}
  }
}

fizzbuzz(fbNum);