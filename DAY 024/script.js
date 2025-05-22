// 1. Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).
function abcd(fn) {
    setTimeout(fn, 3000);
}

abcd(function()
{
    console.log("Hey");
})



// 2. Implement your own version of `.map()` as a higher-order function.
var arr = [1, 2, 3, 4, 5, 6, 7, 8]

function map(a, fn)
{
    var new_arr = [];
    for (let i = 0; i < arr.length; i++) {
        new_arr.push(fn(arr[i]));
    }
    return new_arr;

}

var ans = map(arr, function(value){
    return value + 2;
})
console.log(ans);




// 3. Write a function that uses closures to create a counter.
function counter()
{
    let count = 0;
    return function ()
    {
        count++;
        console.log(count);
    }
}

var makecount = counter();
makecount();  // IN THIS MACKECOUNT RUN RETURN FUNCTION OF COUNTER RPEPITEDLY  // CATCH
makecount();
makecount();

//M2
counter()();  // IN THIS COUNTER START FROM SCRECH   // CATCH
counter()();



// 4. Implement a function that limits how many times another function can be called (Closure + HOF).
function fnlimiter(fn, limit)
{
    let totalcalled = 0;
    return function()
    {
        if (totalcalled < limit) {
            totalcalled++;
            fn();
        }
        else
        {
            console.error("Limit Reched");
        }
    }
}

var limiter = fnlimiter(function(){
    console.log("HEY");
}, 3);

limiter();
limiter();
limiter();
limiter();

