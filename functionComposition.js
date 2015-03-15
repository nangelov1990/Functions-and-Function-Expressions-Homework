'use strict'

function add(x, y) {
    return x + y;
}

function addOne(x) {
    return x + 1;
}

function square(x) {
    return x * x;
}

var compose = function() {
    var functions = arguments;

    return function() {
        var args = arguments;
        for (var i = functions.length-1; i>= 0; i--) {
            args = [functions[i].apply(this, args)];
        }

        return args[0];
    };
}
;
function printMessage(func, result){
    return "<strong>- Function:</strong> " + func + "<strong>, Result:</strong> " + result + "<br>";
};

console.log(compose(addOne, square)(5));
document.getElementById("funcComposition").innerHTML += printMessage("compose(addOne, square)(5)", compose(addOne, square)(5));

console.log(compose(addOne, add)(5, 6));
document.getElementById("funcComposition").innerHTML += printMessage("compose(addOne, add)(5, 6)", compose(addOne, add)(5, 6));

console.log(compose(Math.cos, addOne)(-1))
document.getElementById("funcComposition").innerHTML += printMessage("compose(Math.cos, addOne)(-1)", compose(Math.cos, addOne)(-1));

console.log(compose(addOne, Math.cos)(-1))
document.getElementById("funcComposition").innerHTML += printMessage("compose(addOne, Math.cos)(-1)", compose(addOne, Math.cos)(-1));

var compositeFunction = compose(Math.sqrt, Math.cos);

console.log(compositeFunction(0.5));
document.getElementById("funcComposition").innerHTML += printMessage("compositeFunction(0.5)", compositeFunction(0.5));

console.log(compositeFunction(1));
document.getElementById("funcComposition").innerHTML += printMessage("compositeFunction(1)", compositeFunction(1));

console.log(compositeFunction(-1));
document.getElementById("funcComposition").innerHTML += printMessage("compositeFunction(-1)", compositeFunction(-1));
