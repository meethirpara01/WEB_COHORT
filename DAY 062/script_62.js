
let prompt = require('prompt-sync')();

// Q1:-  Count of Primes (Sieve of Eratosthenes)   O(n log(log n))
let num = Number(prompt("Enter Number:- "));
function countPrimes(n) {
    let isPrime = new Array(n+1).fill(true);
    
    for (let i = 2; i<= Math.floor(Math.sqrt(n)); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <=n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    for(let i=2;i<isPrime.length;i++){
        if(isPrime[i])process.stdout.write(i+" ")
    }
}
countPrimes(num);
console.log();



// Q2:-  Optimized Solution (Binary Search):  O(log n)
function sqrtBinarySearch(x) {
    if (x < 2) return x;
    
    let left = 1, right = Math.floor(x / 2);
    let ans = 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid === x) return mid;
        if (mid * mid < x) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return ans;
}
console.log(sqrtBinarySearch(num));



// Q3:-  Optimized Solution (Binary Search):  O(log n)
// Brute Force Method (Multiply x n-times):
let X = Number(prompt("Enter X:- "));
let N = Number(prompt("Enter N:- "));
function powBrute(x, n) {
    let ans = 1;
    for (let i = 0; i < Math.abs(n); i++) {
        ans *= x;
    }
    return n >= 0 ? ans : 1 / ans;
}
console.log(powBrute(X, N));

// Optimized Recursive Method (Exponentiation by Squaring):   O(log n)
function myPow(x, n) 
{
        if(n==0) return 1.0;
        if(n<0) return 1/fun(x,n);
        return fun(x,n);
}
function fun(x , n)
{
    if(n==0) return 1;
    let ans = fun(x , n/2);
    if(n%2==0) return ans*ans;
    return ans*ans*x;
}
console.log(myPow(X, N));
