let prompt = require('prompt-sync')();

// Q1:- Swap Two Integers Without Third Variable — Using Bitwise XOR
let a = Number(prompt('Enter A: '));
let b = Number(prompt('Enter B: '));
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log('A:- ', a);
console.log('B:- ', b);


// Q2:- Check Even or Odd — Using Bitwise AND
let number = Number(prompt('Enter Number: '));
function isEven(num)
{ 
    return (num & 1) === 0; 
}
if(isEven(number))
    console.log('Number Is Even: ', number);
else
    console.log('Number Is Odd: ', number);



// Q3:- Check if a Number is Power of 2 — Using Bitwise AND
let number1 = Number(prompt('Enter Number: '));
function isPowerOfTwo(num) 
{ 
    return num > 0 && (num & (num - 1)) === 0; 
}
if(isPowerOfTwo(number1))
    console.log('Number Is Power Of Two: ', number);
else
    console.log('Number Not Power Of Two: ', number);
