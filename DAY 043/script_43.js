// let arr = [[1,2,3], [4,5,6], [7,8,9]];

// for (let i = 0; i < arr.length; i++) 
// {
//     for(let j = 0; j < arr[i].length; j++)
//     {
//         process.stdout.write(`${arr[i][j]} `);
//     }
//     console.log();
// }

// let prompt = require('prompt-sync')();
// let Size = Number(prompt("Enter Array Size"));
// let arr = new Array(Size);

// for (let i = 0; i < arr.length; i++) 
// {
//     InnerSizeArray = Number(prompt("Enter Inner Array Size "));
//     arr[i] = new Array(InnerSizeArray);
// }

// for (let i = 0; i < arr.length; i++) 
// {
//     for(let j = 0; j < arr[i].length; j++)
//     {
//         arr[i][j] = Number(prompt('Enter Element '));
//     }
//     console.log();
// }
// console.log(arr);


let arr = [[1,2,3], [4,5,6], [7,8,9]];
let leftsum = 0;
let rightsum = 0;
for (let i = 0; i < arr.length; i++) 
{
    for(let j = 0; j < arr[i].length; j++)
    {
        
        if (i == j)
        {
            leftsum += arr[i][j];
            process.stdout.write(`${arr[i][j]} `);
        }
            
        if (i + j == (arr.length - 1))
        {
            rightsum += arr[i][j];
            process.stdout.write(`${arr[i][j]} `);
        }
    }
    console.log();
}

console.log(leftsum);
console.log(rightsum);

//oneline Array
let arr1 = Array.from({length:3}, () => Array(4).fill(1));
console.log(arr1);
