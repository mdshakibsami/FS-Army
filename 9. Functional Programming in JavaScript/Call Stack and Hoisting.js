function A() {
  console.log("I'm from A");
}

function B() {
  A();
}

function C() {
  B();
  A();
}

function D() {
  C();
}

D();

// Function call stack is follows LIFO =. Use run and debug to simulate the thing

// ======================= Hoisting ==========================================

/**
 * Hoisting is JavaScript's default behavior of moving declarations (not initializations) to the top of their scope — before code execution.
 * You can use variables and functions before declaring them — because JS moves declarations to the top during the creation phase of execution context.
 */

console.log(a); // undefined
var a = 5;

// convert to
// var a;
// console.log(a);  // undefined
// a = 5;

/**
 * let and const are also Hoisting (Temporal Dead Zone)
 * Accessing it before declaration throws an error.
 * The time between entering the scope and the actual declaration is called the TDZ (Temporal Dead Zone).
 */
