// Function declarations are hoisted to the top of the scope in which they are declared.

helloFunction(); // Hello, World!
// helloConstFunction(); // TypeError: helloConstFunction is not a function
// helloLetFunction(); // TypeError: helloLetFunction is not a function

function helloFunction() {
  console.log("Hello, World! Function");
}

// const helloConstFunction = function () {
//   console.log("Hello, World! Const Function");
// };

// let helloLetFunction = function () {
//   console.log("Hello, World! Let Function");
// };

// helloFunction();
// helloConstFunction();
// helloLetFunction();
