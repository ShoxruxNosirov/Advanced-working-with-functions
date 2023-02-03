function sayHi() {
    console.log('Hello');
}
setTimeout(sayHi, 1000);

function sayHi(phrase, who) {
    console.log(phrase + ', ' + who);
}
setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John

setTimeout("console.log('Hello')", 1000);

setTimeout(() => console.log('Hello'), 1000);

let timerId = setTimeout(() => console.log("never happens"), 1000);
console.log(timerId); // timer identifier
clearTimeout(timerId);
console.log(timerId); // same identifier (doesn't become null after canceling)

// repeat with the interval of 2 seconds
let timerId2 = setInterval(() => console.log('tick'), 2000);
// after 5 seconds stop
setTimeout(() => { clearInterval(timerId2); console.log('stop'); }, 5000);

let timerId3 = setTimeout(function tick() {
    console.log('tick');
    timerId3 = setTimeout(tick, 2000); // (*)
}, 2000);

let i = 1;
setInterval(function () {
    func(i++);
}, 100);

i = 1;
setTimeout(function run() {
    func(i++);
    setTimeout(run, 100);
}, 100);