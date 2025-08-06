// variables in parentheses in function is called parameters
// values pass to the function is called arguments

// function with local variable
function localFunction() {
  const a = 10;
  const b = 30;
  const result = a + b + Math.min(a, b);
  console.log("function with local variable:", result);
}
localFunction();
console.log("_______________________________________");

// Normal function with arguments
function normalFunction(a, b) {
  const result = a + b + Math.min(a, b);
  console.log("Normal function with arguments :", result);
}
normalFunction(20, 30);
normalFunction(); // print NaN, because in JS function always return something
console.log("_______________________________________");

// function with default value
function defaultFunction(a = 10, b = 100) {
  const result = a + b + Math.min(a, b);
  console.log("Function with default value :", result);
}

defaultFunction(100, 200);
defaultFunction(100); // can't provide the value of b without a in JS
defaultFunction();
console.log("_______________________________________");
