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

printArgsInfo(2, 3, 2.5, -110.5564, false);
printArgsInfo(null, undefined, "", 0, [], {});
printArgsInfo([1, 2], ["string", "array"], ["single value"]);
printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20});
printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);