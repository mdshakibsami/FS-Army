function add(a, b) {
  console.log("a + b = ", a + b);
}

function sub(a, b) {
  console.log("a - b = ", a - b);
}

add(10, 20);
sub(20, 10);

// Function composition => f(g(x))
const result = add(10, 20) + 10; // By default function return 'undefine' in JS
console.log(result); // So, undefine + 10 = NaN

// That is why we need to return value from function to use the value in another variable or function
function times(a, b) {
  return a * b;
}
const resultValue = times(10, 20) + 5;
console.log(resultValue);
