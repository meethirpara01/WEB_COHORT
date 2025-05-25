// 1. Check Frequancey Of An String
let prompt = require('prompt-sync')();
// let str = prompt('Enter Strin : ');
// let freqArr = new Array(123).fill(0);

// for(var i = 0; i < freqArr.length - 1; i++)
// {
//     let ascii = str.charCodeAt(i);
//     freqArr[ascii] = freqArr[ascii] + 1;
// } 
// for(var i = 0; i < freqArr.length - 1; i++)
// {
//     if(freqArr[i] > 0)
//     {
//         console.log(String.fromCharCode(i) + "->" + freqArr[i]);   
//     }
// }

// 2. Check Given String Is Anagram Or Not

// let str1 = prompt('Enter Strin One: ');
// let str2 = prompt('Enter Strin Two: ');
// let freqArr1 = new Array(123).fill(0);
// let isAnagram = true;
// if (str1.length != str2.length) 
// {
//     console.log('Given String are Not a Anagram');
// }
// else
// {
//     for(var i = 0; i < str1.length; i++)
//     {
//         let asci = str1.charCodeAt(i);
//         freqArr1[asci] = freqArr1[asci] + 1;
//     } 
//     for(var i = 0; i < str2.length; i++)
//     {
//         let asci = str2.charCodeAt(i);
//         freqArr1[asci] = freqArr1[asci] - 1;
//     } 
//     for(var i = 0; i < freqArr1.length - 1; i++)
//     {
//         if (freqArr1[i] != 0) 
//         {
//             isAnagram = false;   
//             break;    
//         }
//     }
// }
// if (isAnagram) console.log("Given String are Anagram");
// else console.log("Given String are Not a Anagram");




// SET DATA STRUC TURE
let set = new Set();
set.add(10);
set.add(20);
set.add(30);
set.add(20);
set.add(40);

console.log(set);
set.delete(30);
console.log(set);
console.log(set.has(100));
console.log(set.has(10));
console.log(set.size);

for(let a of set)
{
    process.stdout.write(a + ' ');
}
set.clear()
console.log(set);

// 3. Check If the String Is Penagram Or Not
let sentence = prompt('Enter Sentence: ');

let set1 = new Set();
for (let i = 0; i < sentence.length; i++) 
{
    let ch = sentence.charAt(i);
    set.add(ch);
}
if(set.size === 26)
    console.log('Is Panagram');
else
    console.log('Is Not Panagram');
    