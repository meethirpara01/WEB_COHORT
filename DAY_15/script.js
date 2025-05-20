// 1. Age Category Massage
/*
var Age = prompt("Enter Your age :");

if (Age < 18) {
    console.log("Your Are Minor!!");
}
else if (Age >= 18 && Age <= 60) {
    console.log("Your An Adult!!");
}
else{
    console.log("Your Are a Senior Citizen!!")
}
 */


// 2. Even Or Odd Of Sum To Number
/*
var A = prompt("Enter Number A :");
var B = prompt("Enter Number B :");
var sum = A + B;
if (sum % 2 == 0) {
    console.log("Your Sum is Even");
}
else{
    console.log("Your Sum is Odd")
}
*/

// 3. Character Case Checker
/*
var ch = prompt("Enter Charecter :");
if (ch >= 'A' && ch <= 'Z') {
    console.log("Upper Case!!");
}
else if (ch >= 'a' && ch <= 'z') {
    console.log("Lower Case!!");
}
else {
    console.log("NOT A CHARACTER!!");
}
*/

// 4. LARGEST OF THREE NUMBERS

/*
var num1 = prompt("Enter a Numbers One:");
var num2 = prompt("Enter a Numbers Two:");
var num3 = prompt("Enter a Numbers Three:");

if (num1 > num2 && num1 > num3) {
    console.log("NUMBER ONE IS LARGEST");
}
else if (num2 > num1 && num2 > num3) {
    console.log("NUMBER TWO IS LARGEST");
}
else{
    console.log("NUMBER THREE IS LARGEST");
}
*/


// 5. LEAP YEAR CHECKER 
/*
var year = prompt("Enter a Year :");

if ((year % 4 == 0 || year % 100 == 0) || (year % 400 == 0)) 
{
    console.log("YOUR ENTERD YEAR IS LEAP YEAR!");    
}
else
{
    console.log("YOUR ENTERD YEAR IS NOT LEAP YEAR!"); 
}
*/

// 6. SIMPLE CALCULATOR
/*
var a = prompt("Enter A Number:-");
var b = prompt("Enter B Number:-");

console.log("SUMETION OF TWO NUMBERS :", (a + b));
console.log("ADDICTION OF TWO NUMBERS :", (a - b));
console.log("MULTIPLICATION OF TWO NUMBERS :", (a * b));
console.log("DIVISION OF TWO NUMBERS :", (a / b));
*/


// 7. POSITIVE, NEGATIVE, OR ZERO CHECKER
/*
var A = prompt("Enter A Number:-");

if (A > 0) {
    console.log("NUMBER IS POSITIVE");
}
else if (A < 0) {
    console.log("NUMBER IS NEGATIVE");
}
else{
    console.log("NUMBER IS ZERO");
}
*/


// 8. USER GREETING - NAME AND TIME
/*
var name = prompt("Enter Your Name :-");
var time = Number(prompt("Enter Time (24 Formate):-"));
var TimeN;
if (time >= 24) {
    console.log("Bhosdike Time Invalid Hai"); 
}
else
{ 
    if (time > 12 && time <= 24) 
    {
        TimeN = time;
        time -= 12;
        time = time + " PM";
    }
    else
    {
        TimeN = time;
        time = time + " AM";
    }
}

if (TimeN >= 5 && TimeN < 12 )
{
    console.log("GOOD MORNING" + time + name); 
}
else if (TimeN >= 12 && TimeN < 17) 
{
    console.log("GOOD AFTERNOON " + time + name); 
}
else if (TimeN >= 17 && TimeN <= 21) 
{
    console.log("GOOD EVENING " +  time + name); 
}
else
{
    console.log("GOOD NIGHT " + time + name); 
}
*/

// 9. TRAFIC LIGHT SYSTEM
/*
var light = prompt("Enter color of Light :-");

if (light == "RED" || light == "red") 
{
    console.log("STOP");
}
else if (light == "GREEN" || light == "green") 
{
    console.log("GO");
}
else if (light == "YELLOW" || light == "yellow") 
{
    console.log("REDY");
}
else
{
    console.log("Enter Valid Color!!");
}
*/

// 10. MULTIPLICATION TABLE
/*
var n = Number(prompt("Enter Number:-"));

for (let i = 0; i <= 10; i++) 
{
    console.log(n + " x " + i + " = " + (n * i)); 
}
*/
    