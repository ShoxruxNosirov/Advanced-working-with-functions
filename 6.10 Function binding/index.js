let user = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};
setTimeout(function () {
    user.sayHi(); // Hello, John!
}, 1000);

user = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};
setTimeout(() => user.sayHi(), 1000);       // "Another user in setTimeout!"
user = {
    sayHi() { console.log("Another user in setTimeout!"); }
};

user = {
    firstName: "John"
};
function func(phrase) {
    console.log(phrase + ', ' + this.firstName);
}
let funcUser = func.bind(user);
funcUser("Hello"); // Hello, John

user = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};
let sayHi = user.sayHi.bind(user);
sayHi(); // Hello, John!
setTimeout(sayHi, 1000); // Hello, John!
user = {
    sayHi() { console.log("Another user in setTimeout!"); }
};

function mul(a, b) {
    return a * b;
}
let double = mul.bind(null, 2);
console.log(double(3)); // = mul(2, 3) = 6
console.log(double(4)); // = mul(2, 4) = 8
console.log(double(5)); // = mul(2, 5) = 10


function partial(func, ...argsBound) {
    return function (...args) { // (*)
        return func.call(this, ...argsBound, ...args);
    }
}
// Usage:
user = {
    firstName: "John",
    say(time, phrase) {
        console.log(`[${time}] ${this.firstName}: ${phrase}!`);
    }
};
// add a partial method with fixed time
user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());
user.sayNow("Hello");
  // Something like:
  // [10:00] John: Hello!