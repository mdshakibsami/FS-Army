// A function statement (also called a function declaration) defines a named function. It starts with the function keyword followed by the function name.

function statement(a,b)
{
    return a+b;
}




// A function expression defines a function inside an expression. The function can be named or anonymous and is usually assigned to a variable.

const  functionExpression = function (){
    console.log("I'm a function expression")
}

const greet = function greetFunction(name) {
  return `Hello, ${name}!`;
};

console.log(greet("Alice"));        // Works fine: "Hello, Alice!"
// greetFunction("Bob");            // Error: greetFunction is not defined (name only visible inside function itself)

const greetArrow = (name) => {
  return `Hello, ${name}!`;
};

console.log(greetArrow("Alice"));  // Hello, Alice!

