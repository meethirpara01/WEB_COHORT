// Find All Fector Of Number

// let n = Number(promt("Enter a Number : "))
// for (var i = 0; i <= n / 2; i++) 
// {
//     if (n % i == 0)
//         console.log(i);
// }
// console.log(n);


// NUMBER IS PRIME
let num = Number(prompt("Enter a Number : "));

let isprime = true;
// for (var i = 2; i <= num / 2; i++) 
// {
//     if (num % i == 0)
//     {
//         isprime = false;
//         break;
//     }
// }

isprime = isprimefnc(num);
console.log((isprime) ? "Number Is Prime" : "Number Not a Prime");

function isprimefnc(N) 
{
    if (N <= 1) return false;
    if (N == 2) return false;
    if (N % 2 == 0) return false;
    for (let i = 3; i < Math.floor(Math.sqrt(N)); i += 2) 
    {
        if (num % i == 0)
        {
            isprime = false;
            break;
        }
    }
}

