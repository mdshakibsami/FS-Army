/**
 * Higher Order Function :
 *      - Function can be pass as argument
 *      - Function can be return form another function
 */

/**
 * Comes some hidden concepts
 *      - Scope
 *      - Closure
 *      - Execution Context
 *      - Hoisting
 */

// ================== Function as arguments ===================================
function randomAdd(max) {
  const rand1 = Math.floor(Math.random() * max);
  const rand2 = Math.floor(Math.random() * max);
  return rand1 + rand2;
}
function randomSub(max) {
  const rand1 = Math.floor(Math.random() * max);
  const rand2 = Math.floor(Math.random() * max);
  return rand1 - rand2;
}
function randomSquareSum(max) {
  const rand1 = Math.floor(Math.random() * max);
  const rand2 = Math.floor(Math.random() * max);
  return rand1 * rand1 - rand2 * rand2;
}

// For the slightly different work you have to declare different different function, what if we use a callback function to work with that

function higherOrderFunction(max, callback) {
  const rand1 = Math.floor(Math.random() * max);
  const rand2 = Math.floor(Math.random() * max);
  const result = callback(rand1, rand2);
  return result;
}

console.log(
  "Add two random number",
  higherOrderFunction(100, (a, b) => {
    return a + b;
  })
);
console.log(
  "Sub two random number",
  higherOrderFunction(100, (a, b) => {
    return a - b;
  })
);
console.log(
  "Sum of square of two random number",
  higherOrderFunction(100, (a, b) => {
    return a * a + b * b;
  })
);
// Now you can do whatever you want to do with two random number using the function

// ================== Return function from function ===================================

function power(p) {
  return function (n) {
    let result = 1;
    for (let i = 1; i <= p; i++) {
      result *= n;
    }
    return result;
    // here comes the closure concept, closure is a variable that store the outerFunction variable value, like here inner function is using the value of p even after the complete execution of power Function
  };
}

const square = power(2);
const cube = power(3);

console.log("Square ", square(2));
console.log("Square ", square(3));
console.log("Square ", square(4));

console.log("Cube ", cube(2));
console.log("Cube ", cube(3));
console.log("Cube ", cube(4));
