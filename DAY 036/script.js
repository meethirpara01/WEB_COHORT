//1. Second Maxmimum Element 
// let arr = [28, 7, 74 ,85 , 48, 145, 146, 20, 80];
// let max = Math.max(arr[0], arr[1]);
// let smax = Math.max(arr[0], arr[1]);

// for(let i = 2; i < arr.length; i++ )
// {
//     if (arr[i] > max) 
//     {
//         smax = max;
//         max = arr[i];
//     }
//     else if (arr[i] > smax && arr[i] != max) 
//     {
//         smax = arr[i];
//     }
// }
// IF ALL ELEMENT ARE ZERO (0) THAN MAX = arr[0], SMAX = arr[0]
// console.log("Second Max Element : ", smax);





// 2. REVERSE THE ARRAY
// let arr1 = [28, 7, 74 ,85 , 48, 145, 146, 20, 80];

// let temp = new Array(arr1.length);
// let i = 0;
// for (let j = arr1.length-1; j >= 0; j--) 
// {
//     temp[i] = arr1[j];
//     i++;
// }
// console.log(temp);
// process.stdout.write(temp);

//2. Second Method
// let arr2 = [28, 7, 74 ,-85 , -48, 145, 146, 0, 80];
// let i = 0, j = arr2.length - 1;
// while (i < j) 
// {
//     let temp = arr2[i];
//     arr2[i] = arr2[j];
//     arr2[j] = temp;
//     i++;
//     j--;
// }
// console.log(arr2);





// 3. SORT ALL ZEROS AND ONE
let arr = [0, 1, 1, 0, 1];
let i = 0, j = 0;
while (i < arr.length) 
{
    if (arr[i] == 0) 
    {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;  
    }
    i++;
}
console.log(arr);





// 4. LEFT ROTATE ARRAY WITH 1 ELEMENT
// let arr = [1, 2, 3, 4 ,5];
// let temp = arr[0];
// for (let i = 0; i < arr.length - 1; i++) 
// {
//     arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = temp;
// console.log(arr);

// 4. RIGHT ROTATE ARRAY WITH 1 ELEMENT

// let arr = [1, 2, 3, 4 ,5];
// let temp = arr[arr.length-1];
// for (let i = arr.length - 1; i >= 0; i--) 
// {
//     arr[i] = arr[i - 1];
// }
// arr[0] = temp;
// console.log(arr);



