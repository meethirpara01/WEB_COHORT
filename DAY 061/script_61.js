
let prompt = require('prompt-sync')();

// Q1:-  Sum Of Digit // 891 -> 18
let num = Number(prompt("Enter Number:- "));
function SumOfDigit(n)
{
    if(n < 10) return n;
    let rem = n % 10;
    n = Math.floor(n/10);
    return rem + SumOfDigit(n)
}
let ans = Number(SumOfDigit(num));
console.log(ans);

// Q1:-  Reverse Number // 891 -> 18
function ReverseNumber(n, rev)
{
    if(n === 0) return rev;
    return ReverseNumber(Math.floor(n/10), (rev * 10) + (n % 10))
}
let ans1 = Number(ReverseNumber(num, 0));
console.log(ans1);



// HCF      O(Min(number1, number2))
let number1 = Number(prompt("Enter Number 1:- "));
let number2 = Number(prompt("Enter Number 2:- "));

let i = Math.floor(number1, number2);
while (i >= 1) 
{
    if (number1 % i == 0 && number2 % i == 0) 
    {
        console.log(i + ' ');
        break;
    }
    --i;
}


// GCD
// while(number1 != number2)
// {
//     if(number1 > number2)
//         number1 -= number2;
//     else
//         number2 -= number1;
// }
// console.log(number1);


// With Recursion    O(max(number1, number2))
function GCD(number1, number2)
{
    if (number1 == number2) return number1;
    if(number1 > number2) return GCD(number1 - number2, number2);
    return GCD(number1, number2 - number1);
}
console.log(GCD(number1, number2));


// Method:- 3       O(log max(number1, number2))
function GCD1(number1, number2)
{
    if (number2 == 0) return number1;
    return GCD1(number2, number1 % number2);
}
console.log(GCD1(number1, number2)); 

