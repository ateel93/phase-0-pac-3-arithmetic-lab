function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function increment(a) {
    a++;
    return a;
}

let result = increment(199);
console.log(result);

function decrement(n) {
    n--;
    return n;
}

function makeInt(n) {
    return parseInt(n, 10);
  }

function preserveDecimal (n) {
   return parseFloat (n);
}

console.log(preserveDecimal('2.222'));