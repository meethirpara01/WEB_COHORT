let prompt = require('prompt-sync')()

// 1. Shift Element By K In Array
// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt('Enter Value Of K : '));
// k = k % arr.length;

// function Rotate(arr) 
// {
//     var ele = arr[0];
//     for (let i = 0; i < arr.length; i++) 
//     {
//         arr[i] = arr[i + 1];
//     }
//     arr[arr.length - 1] = ele;
// }

// for(let j = 0; j < k; j++)
// {
//     Rotate(arr);
// }
// console.log(arr);



// Method :- 2
// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt('Enter Value Of K : '));
// k = k % arr.length;
// let temp = new Array(arr.length);
// for(var i = 0; i < arr.length; i++)
// {
//     temp[i] = arr[(i + k) % arr.length];
// }
// console.log(temp);



// Method :- 3
// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt('Enter Value Of K : '));
// k = k % arr.length;

// function Rotate(arr, start, end) 
// {
//     let temp = 0;
//     while (start <= end) {
//         temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
//     console.log(arr);
// }

// Rotate(arr, 0, k-1)
// Rotate(arr, k, arr.length-1)
// Rotate(arr, 0, arr.length-1)


// 2.Linear Search
// let arrl = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// let Target = Number(prompt('Enter Target : '));
// let index = -1;
// for(let i = 0; i < arrl.length; i++)
// {
//     if(arrl[i] == Target)
//     {
//         console.log('Target Found..');
//         index = i;
//         console.log(`Index Is : ${index}`);
//         break;
//     }
// }
// console.log('Target Not Found..');



// 3.Binary Search
let arrb = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let T = Number(prompt('Enter Target : '));
let Elam = -1;
let start = 0; 
let end = arrb.length - 1; 
let mid = (start + end)/2; 


function BinarySearch(arrb, start, end)
{
    while (start <= end) 
    {
        if (arrb[mid] == T) 
        {
            console.log('Target Found..');
            Elem = arrb[mid];
            console.log(`Element Is : ${Elam}`);
            break;  
        }
        else if (arrb[mid] < T) 
        {
            start = mid + 1; 
        }
        else
        {
            end = mid - 1;
        } 
        mid = (start + end)/2;
    }
    console.log('Target Not Found..');
}

BinarySearch(arrb, start, end);