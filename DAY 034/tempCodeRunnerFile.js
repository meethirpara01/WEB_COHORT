var prompt = require("prompt-sync")();
let size = Number(prompt('Enter a Size of Array :'));

let arr = new Array(size);

for (let i = 0; i <= arr.length - 1; i++) 
{
    arr[i] = Number(prompt('Enter Array Element :'));
}

console.log(arr);
