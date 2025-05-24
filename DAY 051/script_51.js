let prompt = require('prompt-sync')();

//1. CHECK PAILNDROME
// let str = prompt('Enter a String: ');
// let start = 0;
// let end = str.length - 1;
// let paln = true;

// while (start < end) 
// {
//     if (str[start] != str[end]) 
//     {
//         paln = false;
//         break;
//     }
//     else
//     {
//         start++;
//         end--;
//     }
// }
// console.log((ispaln) ? 'PALINDROME' : 'NOT PALINDROME');

//2. CONVERT LOWER TO UPPER AND UPPER TO LOWER CASE
// let s = prompt("Enter a String: ");
// let ans = "";
// for (let i = 0; i < s.length; i++) 
// {
//     let asci = s.charCodeAt(i);

//     if (asci >= 65 && asci <= 90) 
//         ans += String.fromCharCode(asci + 32);
//     else if (asci >= 97 && asci <= 122) 
//         ans += String.fromCharCode(asci - 32);
//     else  // Keep non-alphabet characters as-is
//         ans += s[i];
// }
// console.log(ans);

//3. START WITH S OR NOT
// let word = ['attention', 'people', 'attire', 'hello', 'attend']
// let s= 'at';
// let count = 0;

// for(let i = 0; i < word.length; i++)
// {
//     if (word[i].startsWith(s)) 
//     {
//         count++;
//     }
// }
// console.log(count);

// 4. Split Function (To Convert Array Of String) And Convert First and Last Char Uppercase
let s= 'hello my name is meet'
let arr = s.split(' ');
let ans = '';

for(let i = 0; i < arr.length; i++)
{
    let word = arr[i];
    if(word.length <= 2)
            ans += word.toUpperCase();
    else
    {
        ans += word.charAt(0).toUpperCase();
        ans += word.substring(1, word.length - 1)
        ans += word.charAt(word.length - 1).toUpperCase();
    }
    ans += ' ';
}
console.log(arr);
console.log(ans);


