function sayHi() {
    alert('Hello');
}
setTimeout(sayHi, 1000);

function sayHi(phrase, who) {
    alert(phrase + ', ' + who);
}
setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John

setTimeout("alert('Hello')", 1000);

setTimeout(() => alert('Hello'), 1000);

let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // timer identifier
clearTimeout(timerId);
alert(timerId); // same identifier (doesn't become null after canceling)

// repeat with the interval of 2 seconds
timerId = setInterval(() => alert('tick'), 2000);
// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

timerId = setTimeout(function tick() {
    alert('tick');
    timerId = setTimeout(tick, 2000); // (*)
  }, 2000);