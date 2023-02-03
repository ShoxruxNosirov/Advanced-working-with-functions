function sumAll(...args) { // args is the name for the array
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

alert(sumAll(1)); // 1
alert(sumAll(1, 2)); // 3
alert(sumAll(1, 2, 3)); // 6

function showName(firstName, lastName, ...titles) {
    alert(firstName + ' ' + lastName); // Julius Caesar
    // titles = ["Consul", "Imperator"]
    alert(titles[0]); // Consul
    alert(titles[1]); // Imperator
    alert(titles.length); // 2
}
showName("Julius", "Caesar", "Consul", "Imperator");

function showName() {
    alert(arguments.length);
    alert(arguments[0]);
    alert(arguments[1]);
}
// shows: 2, Julius, Caesar
showName("Julius", "Caesar");
// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");

function f() {
    let showArg = () => alert(arguments[0]);
    showArg('hello');
}
f(1); // 1

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
alert(Math.max(...arr1, ...arr2));

arr1 = [3, 5, 1];
arr2 = [8, 9, 15];
let merged = [0, ...arr1, 2, ...arr2];
alert(merged); // 0,3,5,1,2,8,9,15 

let str = "Hello";
alert( [...str] ); // H,e,l,l,o

let arr = [1, 2, 3];
let arrCopy = [...arr];
alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true
alert(arr === arrCopy); // false

let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj };
alert(JSON.stringify(obj) === JSON.stringify(objCopy)); // true
alert(obj === objCopy); // false