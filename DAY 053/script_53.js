// Q1 :- JEWELS AND STONES 
let prompt = require('prompt-sync')();
// let jew = prompt('Enter Jewels String : ');
// let sto = prompt('Enter Stones String : ');
// let set = new Set();
// for (let i = 0; i < jew.length; i++) 
// {
//     set.add(jew.charAt(i));
// }
// let count = 0;
// for(let i = 0; i < sto.length; i++)
// {
//     let ch = sto.charAt(i);
//     if (set.has(ch))
//         count++;
// }
// console.log(count);


// Q2 :- HAPPY NUMBERS 
// function isNumberisHappy(num)
// {
//     let set1 = new Set();
//     while (true) 
//     {
//         let sum = 0;
//         while (num > 0) 
//         {
//             let rem = num % 10;
//             sum = sum + (rem * rem);
//             num = Math.floor(num / 10);
//         }
//         if(sum == 1) return true;
//         if (set1.has(sum)) return false;
//         else set1.add(sum);
//         num = sum;
//     }
//     return false;
// }
// let num = prompt('Enter Number : ');
// let ans = isNumberisHappy(num);
// console.log(ans);





// MAP -> {Kye -> Vlaue}
// IN MAP KYE ARE ALWAYS UNIAQE AND CAN BE DIFFRENTE
let map = new Map();
map.set("Meet", 5);
map.set("Meet", 8);
console.log(map);
map.set("name", "MEET");
map.set("age", 19);
map.set("isMale", true);
console.log(map);
map.delete("Meet");
console.log(map);
console.log(map.has("name")); 
console.log(map.size);
console.log(map.get('age')); // Alwase acsept key and get vlaue;
console.log(map.keys());
for(let a of map.keys())
    console.log(a);
console.log(map.values());
for(let a of map.values())
    console.log(a);
for(let [key, value] of map)
    console.log(`key:- ${key}, vlaue:- ${value}`);
map.clear();
console.log(map);


// Q1 :- Frequeancy Maker
// let size = prompt('Enter Size of Array: ');
// let arr = new Array(size);
// for(let i = 0; i < size; i++)
// {
//     arr[i] = prompt(`Enter Size of Array Element ${i + 1}: `);
// }
let str = prompt('Enter String: ');
let map1 = new Map()
for(let i = 0; i < str.length; i++)
{
    if (map1.has(str[i])) 
        map1.set(str[i], map1.get(str[i]) + 1);
    else
        map1.set(str[i], 1);
}
console.log(map1);
