// BOOK NOTES


// RESET PARAMETERS
function abcd (a, b, c, d, ...chacha)
{
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(chacha);
};
abcd(1, 2, 3, 4, 5, 6, 7);


// IIFE
(function abcd()
{
    console.log('IMMEDIATELY INVOKED FUNCTION EXPRESSION');
})();


// HOFS
function MFunc()
{
    return function()
    {
        console.log("HOFS");
    }
}
MFunc()();

function MFunc1(func)
{
    func();
}
MFunc1 (function()
        {
            console.log('HOFS-WithBoth');
        });

//EX :-
function multiplyBy(factor) {
    return function (num) {
        return num * factor;
    };
}
const double = multiplyBy(2);
console.log(double(5)); // 10


// CALL BACK FUNCRION - CBF
function cbf(func)
{
    func();
}
cbf (function()
        {
            console.log('CBF');
        });

//EX :-
function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); // Executing the callback
}
function sayGoodbye() {
    console.log("Goodbye!");
}
greet("Alice", sayGoodbye);



// FIRST CLASS FUNCTION
    /* FIRST CLASS FUNV+CTION IS AN CREDIT IN JS AND JS GIVE THIS CREDIT TO FUNCTION. 
    AND THIS CREDIT SAYS, 
    'TREATE A FUNCTION AS A VLAUE. AND EVERY FUNCTION CAN CALLED FIRST CLASS FUNCTION'.*/



// PURE FUNCTION
    /* A FUNCTION WITHOUT SIDE EFFECTS MENT DOSE NOT MODIFY EXTERNAL STATE.
     (GLOBAL VARIABLES) IT'S CALLED PURE MODIFY FUNCTION.*/

function add(a, b)
{
    return a + b;
}
let sum = add(5, 6)
console.log(sum);

// IMPURE FUNCTION
    /* THIS FUNCTION TOTALY DIFFRENT FROM PURE FUNCTION. */

let total = 10;
function addtotal(a)
{
    total += a; 
}
addtotal(10);
console.log(total);





// COF - CLOSER ORDER FUNCTION 
function cof()
{
    var a = 12;
    return function()
    {
        console.log(`COF - ${a}`);
    }
}
// M1
var ans = cof();
ans();
// M2
cof()();




// SCOPING
//  1. GLOBLE SCOPE
//  2. FUNCTION SCOPE
