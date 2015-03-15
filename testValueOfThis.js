'use strict'

function testContext() {
	console.log(this);
	// return this;
}

document.getElementById("testValueOfThis1").innerHTML += "From the global scope => " + testContext() + '<br>';
testContext();
// console.log(testContext());

(function sampleFunction () {
	var outputOfTestContext = testContext();
	document.getElementById("testValueOfThis1").innerHTML += "Inside another function => " + outputOfTestContext + '<br>';
	testContext();
	// console.log(testContext());
})();

var obj = new testContext();
document.getElementById("testValueOfThis1").innerHTML += "As an object => " + obj + '<br>';

// console.log(obj);