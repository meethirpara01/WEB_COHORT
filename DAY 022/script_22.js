// 1. MAP
/*
var arr = [1, 2, 3, 4];
var ans = arr.map(function(value)
{
    return 1;
})
console.log(ans);
*/

// 2. ForEach
/*
var arr = [1, 2, 3, 4];
arr.forEach(function(value)
{
    console.log(value);
})
*/


// 3. Filter
/*
var arr = [1, 3, 2, 4];
var ans = arr.filter(function(value)
{
    return value > 2;
})
console.log(ans);
*/

// 4. Reduce

var arr = [1, 3, 2, 4];
var ans = arr.reduce(function(accumulator ,key)
{
    return accumulator + key;
}, 0);
console.log(ans);

