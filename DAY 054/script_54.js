let prompt = require('prompt-sync')();

// Q1 :- TO SUM
// let size = Number(prompt('Enter Size of Array: '));
// let arr = [];
// for (let i = 0; i < size; i++) 
// {
//     arr[i] = Number(prompt(`Enter Element ${i + 1}: `));
// }
// let target = Number(prompt('Enter Target: '));
// let map = new Map();
// let ans = [-1, -1];
// for (let i = 0; i < arr.length; i++) 
// {
//     let complement = target - arr[i];
//     if (map.has(complement)) 
//     {
//         ans[0] = map.get(complement);
//         ans[1] = i;
//         break;
//     }
//     map.set(arr[i], i);
// }
// console.log(ans);


// Q2 :- FIRST LETER APPEAR TWICE
// let str = prompt('Enter String: ');
// let map1 = new Map();
// let ans1 = 0;
// for(let i = 0; i < str.length; i++)
// {
//     let ch = str.charAt(i);
//     if (map1.has(ch))
//     {
//         ans1 = ch;
//         break;
//     }
//     else
//         map1.set(ch, 1);
// }
// console.log(ans1);


// Q3 :- SORT THE PEOPLE
let size = Number(prompt('Enter Size of Array: '));
let arr = [];
for (let i = 0; i < size; i++) 
{
    arr[i] = Number(prompt(`Enter Height ${i + 1}: `));
}
let str1 = [];
for (let i = 0; i < size; i++) 
{
    str1[i] = prompt(`Enter Name ${i + 1}: `);
}
let map = new Map();
for (let i = 0; i < str1.length; i++) 
{
    map.set(arr[i], str1[i]);
}
arr.sort((a, b) => b-a);
let ans2 = new Array(str1.length);
for (let i = 0; i < arr.length; i++) 
{
    ans2[i] = map.get(arr[i]);
}
console.log(ans2);



