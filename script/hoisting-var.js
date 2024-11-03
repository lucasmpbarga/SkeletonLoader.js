// Variables are hoisted to the top of the scope in which they are declared.

// var testVar = undefined;

console.log(testVar); // undefined
console.log(testConst); // ReferenceError: Cannot access 'testConst' before initialization
console.log(testLet); // ReferenceError: Cannot access 'testLet' before initialization

var testVar = "var";
const testConst = "const";
let testLet = "let";

// console.log(testVar);
// console.log(testConst);
// console.log(testLet);
