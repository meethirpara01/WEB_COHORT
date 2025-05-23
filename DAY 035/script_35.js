let arr = [10, 20, 30, 40, 50]; // INDEX ALWAYS SRAT FROM 0
arr.push(100);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(101);
console.log(arr);
arr.shift(101);
console.log(arr);
console.log(arr.length);
arr[2] = 101
console.log(arr);
arr[10] = 101
console.log(arr);
console.log(arr[7]);

let arr1 = new Array(5);
arr1[0] = 0;
arr1[1] = 1;
arr1[2] = 2;
arr1[3] = 3;
arr1[4] = 4;
arr1[6] = 6;
arr1.push(100);
console.log(arr1);

let prompt = require("prompt-sync")()
let size = Number(prompt("Enter a Size Of Array :"));
let arr2 = new Array(size);
let sum = 0;
for (let i = 0; i < size; i++) 
{
    arr2[i] = Number(prompt("Enter a "+ i + " Element :"));
    sum = sum + arr2[i];
}
console.log(sum);

let arr3 = [10, 5, 80, 60, 5, 56, 45, 95, 70];
let max = arr3[0];

for (let i = 0; i < arr3.length; i++) 
{
    if (max < arr3[i]) 
    {
        max = arr3[i];
    }
}
console.log(max);

