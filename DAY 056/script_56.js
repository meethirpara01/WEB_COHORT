// IN THIS LECTURE I LEARCH WHAT IS CALL STACK AND WHAT RECUESION

let prompt = require('prompt-sync')();

// Q1:- Prnting Hello Word N Times
let n = Number(prompt("Enter Number: "));
function greet(a)
{
    if(a == 0) return;  // base case
    console.log("Hello Ji");
    greet(--a); // a = a - 1;  // recursive call
}
greet(n);

function printNumbers(n) {
    if (n === 0) return;     // base case
    console.log(n);
    printNumbers(n - 1);     // recursive call
}

printNumbers(n);