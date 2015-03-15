'use strict'

function testContext() {
	console.log(this);
	return this;
}

document.getElementById("testValueOfThis").innerHTML += "From the global scope => " + testContext.call(this) + '<br>';

(function sampleFunction () {
	document.getElementById("testValueOfThis").innerHTML += "Inside another function => " + testContext.call(this) + '<br>';
})();

var obj = new testContext();
document.getElementById("testValueOfThis").innerHTML += "As an object => " + obj + '<br>';