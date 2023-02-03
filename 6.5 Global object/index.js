// alert === window.alert      // true

var gVar = 5;
// gVar === window.gVar         // true

let gLet = 5;
// gLet == window.gLet          // false

// window.currentUser = {    name: "John"  };
// alert(currentUser.name);  // John
// alert(window.currentUser.name); // John

// if (!window.Promise) {
//     window.Promise = ... // custom implementation of the modern language feature
// }