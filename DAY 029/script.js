// LEAP YEAR CHECKER 

let year = Number(prompt("Enter a year : "));
let isLeap = false;

// if (year % 4 == 0) {
//     if (year % 100 == 0)
//     {
//         if (year % 400 == 0)
//             isLeap = true;
//         else
//             isLeap = false;
//     }
//     else
//         isLeap = true;
// }

if ((year % 4 == 0 && year % 100 != 0 ) || (year % 400 == 0))
    isLeap = true;
else
    isLeap = false;

console.log(isLeap ? "Your Enterd Is Leap Year" : "Your Enterd Is Not Leap Year");


// Shop Disscount

let amount = Number(promt("Enter a NUmber"));
let dis = 0;

if (amount >= 0 && amount <= 5000)
    dis = 0
else if (amount > 5000 && amount  <= 7000)
    dis = 5
else if (amount > 7000 && amount  <= 9000)
    dis = 10
else if (amount > 9000)
    dis = 20
else console.log("Invalid Input");

console.log(amount - (dis * amount) / 100);


// Light Unit

let unit = Number(promt("Enter a NUmber"));
let amountu = 0;

// if (unit >0 && unit <= 100) {
//     amountu = unit * 4.2; 
// }
// else if (unit > 100 && unit <= 200) {
//     amountu = (100 * 4.2) + (unit - 100) * 6
// }
// else if (unit > 200 && unit <= 400) {
//     amountu = (100 * 4.2) + (100 * 6) + (unit - 200) * 8
// }
// else if (unit > 400) {
//     amountu = (100 * 4.2) + (100 * 6) + (200 * 8) + (unit - 400) * 13
// }

if (unit > 400) {
    amountu = (unit - 400) * 13;
    unit = 400
}
else if (unit > 200 && unit <= 400) {
    amountu = amountu + (unit - 200) * 8
    unit = 200
}
else if (unit > 100 && unit <= 200) {
    amountu = amountu + (unit - 100) *6
    unit = 100
}

amountu = amountu + (unit -100) * 4.2; 


console.log(amountu);
