// IN THIS LECTURE I LEARCH WHAT IS CALL STACK AND WHAT RECUESION

let prompt = require('prompt-sync')();

// Q1:- Print N To 1 
let number = Number(prompt("Enter Number:- "));
function PrintNto1(n)
{
    if (n == 0) return;
    process.stdout.write(n + " ");
    PrintNto1(n - 1);
}
PrintNto1(number);
console.log();


// Q2:- Print 1 To N
function Print1toN(n)
{
    if (n == 0) return;
    Print1toN(n - 1);
    process.stdout.write(n + " ");
}
Print1toN(number);
console.log();

// Q3:- Sum 1 To N
function Sum1toN(n)
{
    if (n == 1) return n;
    return n + Sum1toN(n - 1); 
}
let sum = Sum1toN(number);
console.log(sum);


// Q3:- Sum Of N
function FacOfN(n)
{
    if (n == 1) return n;
    return n * FacOfN(n - 1); 
}
let fac = FacOfN(number);
console.log(fac);
console.log();


// Q3:- FibonachiSeris
function FibOfN(n, first, secoend)
{
    if(n == 0) return;
    let third = first + secoend;
    process.stdout.write(third + " ");
    FibOfN(n - 1, secoend, third);
}
let first = 0;
let secoend = 1;
let N = Number(prompt("Enter Number:- "));
process.stdout.write(first + " " + secoend + " ");
FibOfN(N - 2, first, secoend);
console.log();



// Q4:- Fibo
function fibo(n)
{
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fibo(n - 1) + fibo(n - 2);
}
let N1 = Number(prompt("Enter Number:- "));
console.log(fibo(N1));


