
let prompt = require('prompt-sync')();

// Q1:-  Merge Sorted Array
let size = Number(prompt("Enter Size For First Array:- "));
let nums1 = new Array(size);
for(let i = 0; i < size; i++)
{
    nums1[i] = Number(prompt(`Enter Element ${i + 1}:- `));
}
let size1 = Number(prompt("Enter Size For Secoend Array:- "));
let nums2 = new Array(size1);
for(let i = 0; i < size1; i++)
{
    nums2[i] = Number(prompt(`Enter Element ${i + 1}:- `));
}
let m = Number(prompt("Enter Number:- "));
let n = Number(prompt("Enter Number:- "));

function merge(nums1, m, nums2, n) 
{
    let i = m - 1, j = n - 1, k = nums1.length - 1;

    while (i >= 0 && j >= 0) 
    {
        if (nums1[i] > nums2[j]) nums1[k--] = nums1[i--];
        else nums1[k--] = nums2[j--];
    }

    while (j >= 0) 
    {
        nums1[k--] = nums2[j--];
    }
}
merge(nums1, m, nums2, n) 



// Q2:- Remove Duplicates from Sorted Array
let arrsize = Number(prompt("Enter Size Of Array:- "));
let arr = new Array(arrsize);
for(let i = 0; i < arrsize; i++)
{
    arr[i] = Number(prompt(`Enter Element ${i + 1}:- `));
}
function removeDuplicates(nums) 
{
    let j = 1;
    for (let i = 0; i < nums.length - 1; i++) 
    {
        if (nums[i] !== nums[i + 1]) 
        {
            nums[j] = nums[i + 1];
            j++;
        }
    }
    return j;
}
removeDuplicates(arr)




// Q3:- Duplicate Zeros
let arr1size = Number(prompt("Enter Size Of Array:- "));
let arr1 = new Array(arr1size);
for(let i = 0; i < arr1size; i++)
{
    arr1[i] = Number(prompt(`Enter Element ${i + 1}:- `));
}
function duplicateZeros(arr) 
{
    let zeroes = 0;
    for (let i = 0; i < arr.length; i++) 
    {
        if (arr[i] === 0) zeroes++;
    }

    let i = arr.length - 1;
    let j = arr.length - 1 + zeroes;

    while (i < j) 
    {
        if (j < arr.length) arr[j] = arr[i];
        j--;

        if (arr[i] === 0) 
        {
            if (j < arr.length) arr[j] = 0;
            j--;
        }
        i--;
    }
}
duplicateZeros(arr1)