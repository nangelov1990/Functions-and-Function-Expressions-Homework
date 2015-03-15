'use strict'

function add (number) {
	var sum = number;

	function sumFunc(anotherNumber) {
		sum += anotherNumber;
		return sumFunc;
	}

	sumFunc.toString = function () {
		return sum;
	}

	// document.getElementById("addNumbers").innerHTML += sum + '<br>';
	return sumFunc;
}

function printMessage(func, result){
	return "<strong>- Function:</strong> " + func + "<strong>, Result:</strong> " + result + "<br>";
};

console.log(add(1))
document.getElementById("addNumbers").innerHTML += printMessage("add(1)", add(1));

console.log(add(2)(3));
document.getElementById("addNumbers").innerHTML += printMessage("add(2)(3)", add(2)(3));

console.log(add(1)(1)(1)(1)(1));
document.getElementById("addNumbers").innerHTML += printMessage("add(1)(1)(1)(1)(1)", add(1)(1)(1)(1)(1));

console.log(add(1)(0)(-1)(-1));
document.getElementById("addNumbers").innerHTML += printMessage("add(1)(0)(-1)(-1)", add(1)(0)(-1)(-1));

var addTwo = add(2);
console.log(addTwo);
document.getElementById("addNumbers").innerHTML += printMessage("addTwo = add(2)", addTwo = add(2));

var addTwo = add(2);
var addTwoAndThree = addTwo(3);
console.log(addTwoAndThree);
document.getElementById("addNumbers").innerHTML += printMessage("addTwo(3)", addTwoAndThree);

var addTwo = add(2);
var addTwoThreeAndFive = addTwo(3)(5)
console.log(addTwoThreeAndFive);
document.getElementById("addNumbers").innerHTML += printMessage("addTwo(3)(5)", addTwoThreeAndFive);