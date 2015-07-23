// Fizz-Buzz //
var fbNum = getNumber();
console.log(fbNum instanceof Number);
while (true) {
	if (!isNaN(fbNum)) {
		break;
	} else {
		fbNum = getNumber();
	}
}

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

function getNumber() {
	var fbNum = prompt("Please enter a number");
	fbNum = Number(fbNum);
	return fbNum;
}

fizzbuzz(fbNum);