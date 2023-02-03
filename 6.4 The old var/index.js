if (true) {
    var test1 = true; // use "var" instead of "let"
}
console.log(test1); // true,

if (true) {
    let test2 = true; // use "let"
}
//  console.log(test2); // ReferenceError: test is not defined

for (var i = 0; i < 10; i++) {
    var one = 1;
}
console.log(i);   // 10
console.log(one); // 1

function sayHi() {
    if (true) {
        var phrase = "Hello";
    }
    console.log(phrase); // works
}
sayHi();
// console.log(phrase); // Error

let user1;
//let user1; // SyntaxError: 'user' has already been declared

var user2 = "Pete";
var user2 = "John"; // this "var" does nothing (already declared)
console.log(user2); // John

function sayHi() {
    var phrase;
    phrase = "Hello";
    console.log(phrase);      // "Hello"
}
sayHi();

function sayHi() {
    phrase = "Hello"; // (*)
    if (false) {
        var phrase;
    }
    console.log(phrase);
}
sayHi();

(function () {
    console.log("Parentheses around the function");
})();

(function () {
    console.log("Parentheses around the whole thing");
}());

!function () {
    console.log("Bitwise NOT operator starts the expression");
}();

+function () {
    console.log("Unary plus starts the expression");
}();
