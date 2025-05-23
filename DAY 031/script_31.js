// 1. sum Of Digits 
// let n = Number(prompt("Enter a Number"))
// let sum = 0;

// while (n > 0)
// {
//     let rem = n % 10;
//     sum = sum + rem;
//     n = Math.floor(n / 10);
// }
// console.log(sum);


// 2. reverse Numbers 
// let num = Number(prompt("Enter a Number"));
// let rev = 0;
// while (num > 0)
// {
//     rem = num % 10;
//     rev = (rev * 10) + rem;
//     num = Math.floor(num / 10);
// }
// console.log(rev);



// 3. Automorfic Numbers 
let num = Number(prompt("Enter a Number"));
let copy = num;
let sq = num * num;
let count = 0;
while (num > 0)
{
    count++;
    num = Math.floor(num/10);
}

// console.log((sq % Math.pow(10, count) == copy) ? "Your Number Is Automorfic" : "Your Number Not a Automorfic");
if (sq % Math.pow(10, count) == copy) 
    console.log("Your Number Is Automorfic");
else  console.log("Your Number Not a Automorfic");


