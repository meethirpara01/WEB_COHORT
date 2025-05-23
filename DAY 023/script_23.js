// 16. Remove duplicate values from an array.  
/*
let arr = [1, 2, 3, 2, 4, 3, 5];
// new set(arr) --> remove duplicates but store in set of string
// [new set(arr)] --> With adding this brekets create array of set(formate)
// [...new set(arr)] --> with spread opratore create a Normal array
let uniqueArr = [...new Set(arr)];  
*/


// 17. Find the second largest number in an array. 
/*
let arr = [1, 2, 3, 2, 4, 7, 5, 6, 3, 5];

var newarr = [...new set(arr)].sort(function (a, b)
{
    return b - a;
});
console.log(newarr[1]);


// METHOD 2 :-
console.log([...new set(arr)].sort(function (a, b)
{
    return b - a;
})[1]);
*/


// 18. Sort an array in descending order. 
/*
let numbers = [5, 2, 9, 1, 5, 6];

numbers.sort((a, b) => b - a);

console.log(numbers); // [9, 6, 5, 5, 2, 1]
*/


// 19. Reverse an array without using .reverse(). 
/*
function reverseArray(arr) {

    let reversed = [];
    
    for (let i = arr.length - 1; i >= 0; i--) {
    
        reversed.push(arr[i]);
    }
    return reversed;
}

var ans = reverseArray([9, 6, 5, 5, 2, 1]);
console.log(ans);
*/

// 20. Find the most frequent element in an array.  
/*
let arr = [3, 4, 1, 3, 4, 6, 7];
var obj = {};

arr.forEach(function(val)
{
    obj[val] == undefined ? (obj[val] = 1) : obj[val]++;
});
*/