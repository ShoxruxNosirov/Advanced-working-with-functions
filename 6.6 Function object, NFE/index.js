function sayHi() {
    console.log("Hi");
}
console.log(sayHi.name); // sayHi

let sayHii = function () {
    console.log("Hi");
};
console.log(sayHii.name); // sayHi

function f(sayHi = function () { }) {
    console.log(sayHi.name); // sayHi (works!)
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
console.log(user.sayHi.name); // sayHi
console.log(user.sayBye.name); // sayBye

let arr = [function () { }];
console.log(arr[0].name);   // <empty string>

function f1(a) { }
function f2(a, b) { }
function many(a, b, ...more) { }

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(many.length); // 2

function sayHiii() {
    console.log("Hi");
    sayHiii.counter++;
}
sayHiii.counter = 0;
sayHiii(); // Hi
sayHiii(); // Hi

console.log(`Called ${sayHiii.counter} times`); // Called 2 times

let sayHi = function func(who) {
    if (who) {
        console.log(`Hello, ${who}`);
    } else {
        func("Guest"); // use func to re-call itself
    }
};
sayHi(); // Hello, Guest
// func(); // Error

let sayHi = function func(who) {
    if (who) {
        console.log(`Hello, ${who}`);
    } else {
        func("Guest"); // Now all fine
    }
};
let welcome = sayHi;
sayHi = null;
welcome(); // Hello, Guest