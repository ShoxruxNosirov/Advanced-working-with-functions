let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList1() {
        this.students.forEach(
            student => console.log(this.title + ': ' + student)
        );
    },

    showList2() {
        //'use strict'
        let obj = this;
        this.students.forEach(function (student) {
            console.log(obj.title + ': ' + student);      // this !== obj
            console.log('this-> ', this)                  // 'use strict' -> this = undefined 
        });                                               //  no 'use strict' -> this = global
    }
};

group.showList1();
group.showList2();

function defer1(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
    };
}
function defer2(f, ms) {
    return function (...args) {
        let ctx = this;
        setTimeout(function () {
            return f.apply(ctx, args);
        }, ms);
    };
}
function sayHi(who) {
    console.log('Hello, ' + who);
}

let sayHiDeferred1 = defer1(sayHi, 1000);
let sayHiDeferred2 = defer2(sayHi, 2000);
sayHiDeferred1("John"); // Hello, John after 1 seconds
sayHiDeferred2("John"); // Hello, John after 1 seconds

