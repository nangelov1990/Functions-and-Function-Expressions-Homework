'use strict'

function testContext() {
	console.log(this);
}

document.getElementById("testValueOfThis1").innerHTML += "From the global scope => " + testContext() + '<br>';
testContext.call(this);

(function sampleFunction () {
	var outputOfTestContext = testContext.call(this);
	document.getElementById("testValueOfThis1").innerHTML += "Inside another function => " + outputOfTestContext + '<br>';
	testContext();
})();

var obj = new testContext();
document.getElementById("testValueOfThis1").innerHTML += "As an object => " + obj + '<br>';