// 1. Spairel Of Matrix
// 2. Flip Images
// THIS BOTH QUESTION IN HOMEWORK

// NOW START STRING

// STRING ARE IMMUTABLE IN NATURE
// STRING ARE SEQUENCE OF CHARACTER
// STRING SHOWS BEHAVIOUR LIKE ARRAY
// BUT STRING ARE NOT ARRAY OF CHARACTER
// AND STRING ARE NOT IMMUTABLE 

let str = 'MEET_HIRPARA';
console.log(str.length);
console.log(str.substring(3)); // DOSE NOT WORK IN NAGETIVE IN SUBSTRING
console.log(str.substring(3, 8));
console.log(str.slice(3, 8));
console.log(str.slice(-7));
console.log(str.slice(-8, -1));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.concat('IS ', 'AN ', 'ENGEENIARE  '));
console.log(str.indexOf('_HIR'));


let s = '      MEET_HIRPARA       ';
console.log(s.trim());

for(var i = 0; i < str.length; i++)
{
    console.log(str[i]);  
}
console.log();
let rev = '';
for(var i = str.length - 1; i >= 0; i--)
{
    rev += str.charAt(i);
}
console.log(rev); 




