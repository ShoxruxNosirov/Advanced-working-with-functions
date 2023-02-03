let sum = new Function('a', 'b', 'return a + b');
console.log(sum(1, 2)); // 3

let sayHi = new Function('console.log("Hello")');
sayHi(); // Hello

function getFunc() {
    let value = "test";
    let func = new Function('console.log(value)');
    return func;
}

//  getFunc()(); // error: value is not defined

/*
    new Function('a', 'b', 'return a + b'); // basic syntax
    new Function('a,b', 'return a + b'); // comma-separated
    new Function('a , b', 'return a + b'); // comma-separated with spaces
*/