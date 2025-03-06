function add(a, b) {
    // we'll fill this in shortly
    return a + b;
  }
  function subtract(a, b) {
    // we'll fill this in shortly
    return a - b;
  }
  function multiply(a, b) {
    // we'll fill this in shortly
    return a * b;
  }
  function divide(a, b) {
    // we'll fill this in shortly
    return a / b;
  }

  console.log(add(12,2));
  console.log(subtract(12,2));
  console.log(multiply(12,2));
  console.log(divide(12,2));

number = 5;
number == 3;
number -= 2;
number *= 10;
number /= 5;


function increment(n)  {
    return ++n;
}
function decrement(n){
    return --n;
}

function preserveDecimal(n) {
    const parsed = parseFloat(n); 
    return isNaN(parsed) ? NaN : parsed; 
}
function makeInt(string) {
    return parseInt(string, 10); // Parse the string as a base-10 integer
}


console.log(preserveDecimal("42.42")); 
console.log(preserveDecimal("42.42abc")); 
console.log(preserveDecimal("abc"));  
console.log(preserveDecimal("3.14"));

console.log(makeInt("80.123999")); // 80 (parses only the integer part)
console.log(makeInt("42"));        // 42 (already an integer)
console.log(makeInt("42abc"));