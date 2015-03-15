'use strict';

function printArgsInfo() {
	for (var i = 0; i < arguments.length; i++) {
		var variableValue = arguments[i];
		var variableType = typeof arguments[i];
		var outputString =
			variableValue +
			' (' +
			variableType
			+ ')<br>';

		document.getElementById("funcArgs").innerHTML += outputString;
		console.log(outputString);
	};
	document.getElementById("funcArgs").innerHTML += '<br>';
};

function printMessage(what, how){
	return "<strong>- Using " + what + " " + how + " arguments</strong><br>";
};

var firstTest = [2, 3, 2.5, -110.5564, false];
var secondTest = [2, 3, 2.5, -110.5564, false];
var thirdTest = [2, 3, 2.5, -110.5564, false];
var fourthTest = [2, 3, 2.5, -110.5564, false];
var fifthTest = [2, 3, 2.5, -110.5564, false];

printArgsInfo(2, 3, 2.5, -110.5564, false);
printArgsInfo(null, undefined, "", 0, [], {});
printArgsInfo([1, 2], ["string", "array"], ["single value"]);
printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20});
printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);

document.getElementById("funcArgs").innerHTML += printMessage("call()", "without");
printArgsInfo.call(null);
document.getElementById("funcArgs").innerHTML += printMessage("call()", "with");
printArgsInfo.call(null, 2, 3, 2.5, -110.5564, false);
document.getElementById("funcArgs").innerHTML += printMessage("apply()", "without");
printArgsInfo.apply(null);
document.getElementById("funcArgs").innerHTML += printMessage("apply()", "with");
printArgsInfo.apply(null, firstTest);
