{
    let message = "Hello";
    console.log(message); // Hello
}

// console.log(message);  // Error

// show message
let message
console.log(message);
// let message
if (true) {
    let phrase = "Hello!";
    console.log(phrase); // Hello!
}
// console.log(phrase); // Error,

for (let i = 0; i < 3; i++) {
    console.log(i); // 0, then 1, then 2
}
// console.log(i); // Error

function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2