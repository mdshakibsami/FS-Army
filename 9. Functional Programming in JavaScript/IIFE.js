/**
 * Immediately Invoked Function Expression
 * Is defined and executed immediately after it's created.
 * Runs once, right away — no need to call it later.
 * Helps create a private scope.
 * Variables inside an IIFE are not accessible outside — they live in their own scope.
 */

// Normal Function Syntax
(function () {
  // code inside
})();

// Arrow Function Syntax
(() => {
  // code inside
})();

// ============== Example ==================

(function () {
  var privateVar = "I'm private!";
  console.log(privateVar);
})();

// console.log(privateVar); // ❌ ReferenceError

// IIFE with arguments
((name) => {
  console.log(`Hello, ${name}`);
})("Shakib");

// variables are private
const counter = (function () {
  let count = 0;

  return {
    increment: () => ++count,
    decrement: () => --count,
    get: () => count,
  };
})();

console.log(counter.increment()); // 1
console.log(counter.get()); // 1
console.log(counter.count); // undefined (private)
