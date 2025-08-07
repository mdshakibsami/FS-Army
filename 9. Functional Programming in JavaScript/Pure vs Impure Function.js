/*
Pure Function: A pure function is a function that:
    * Always returns the same output given the same input.
    * Has no side effects — it does not modify any external state or variables outside its scope.
    * Its behavior depends only on its input parameters. 
*/

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Always 5
console.log(add(2, 3)); // Always 5 again

/*
Impure Function: An impure function is a function that:
    * May return different outputs given the same input.
    * Has side effects, like modifying external variables, changing DOM, performing I/O, or relying on external state.
*/

let counter = 0;

function incrementCounter() {
  counter += 1; // modifies external variable
  return counter;
}

console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2 — different output even though no input

// ======================= Some Examples =======================================

// Pure Function
function times(a, b) {
  return a * b;
}

// Pure Function
let number = 10;
function changeNumber(number) {
  number = 100; // it is not changing the external number but internal parameter
  return number;
}
changeNumber(number);
console.log("Number = ", number);

// Impure Function
let limit = 100;
function changeLimit() {
  limit = 500; // because it changes the external limit variable
  return limit;
}
changeLimit();
console.log("Limit = ", limit);

// pure
const arr = [1, 2, 3];
function addNumber(arr, num) {
  arr.push(num);
}

// impure
const list = [1, 2, 3, 4];
function addToList(num) {
  list.push(num);
}

// impure
function print(msg) {
  console.log(msg);
}
/*
It has a side effect: calling console.log outputs to the console (an effect outside the function’s own scope).

Even though it always logs the input msg, it does not return a value and causes an observable effect outside.
*/
