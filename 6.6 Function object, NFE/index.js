function sayHi() {
    alert("Hi");
}
alert(sayHi.name); // sayHi

let sayHii = function () {
    alert("Hi");
};
alert(sayHii.name); // sayHi

function f(sayHi = function () { }) {
    alert(sayHi.name); // sayHi (works!)
}
f();

let user = {
    sayHi() {
        // ...
    },
    sayBye: function () {
        // ...
    }
}
alert(user.sayHi.name); // sayHi
alert(user.sayBye.name); // sayBye

let arr = [function () { }];
alert(arr[0].name);   // <empty string>

function f1(a) { }
function f2(a, b) { }
function many(a, b, ...more) { }

alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2

function sayHiii() {
    alert("Hi");
    sayHiii.counter++;
}
sayHiii.counter = 0;
sayHiii(); // Hi
sayHiii(); // Hi

alert(`Called ${sayHiii.counter} times`); // Called 2 times

let sayHi = function func(who) {
    if (who) {
        alert(`Hello, ${who}`);
    } else {
        func("Guest"); // use func to re-call itself
    }
};
sayHi(); // Hello, Guest
// func(); // Error

let sayHi = function func(who) {
    if (who) {
        alert(`Hello, ${who}`);
    } else {
        func("Guest"); // Now all fine
    }
};
let welcome = sayHi;
sayHi = null;
welcome(); // Hello, Guest