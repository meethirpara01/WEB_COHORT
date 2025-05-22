// QUESTION - 1
// Method 1: Using console.log()
console.log("Hello, JavaScript!");

// Method 2: Using console.warn()
console.warn("Hello, JavaScript!");

// Method 3: Using console.error()
console.error("Hello, JavaScript!");

// ONE MORE THINK TABLE
console.table({name: 'Meet', age : 19});


// QUESTION - 2
let result = 35 * 2 - (10 / 2) + 7;
console.log(result); // Output: 74


// QUESTION - 3
console.log(typeof "123");  // "string"
console.log(typeof 123);    // "number"
console.log(typeof true);   // "boolean"
console.log(typeof null);   // "object" (JavaScript quirk)
// IN JAVA SCRIPT TYPEOF WORK ON DATATAG AND UNLL -> 000 BUT THIS 000 IS ONE TYPE OF OBJECT THAT'S WHY NULL'S TYPEOF IS OBJECT.


// QUESTION - 4
let a = 10, b = 20;
console.log("Before Swap:", "a =", a, ", b =", b);

// Using a temporary variable
let temp = a;
a = b;
b = temp;
console.log("After Swap (Method 1):", "a =", a, ", b =", b);

// Using array destructuring (modern JS)
[a, b] = [10, 20];
[a, b] = [b, a];
console.log("After Swap (Method 2):", "a =", a, ", b =", b);




// QUESTION - 5
console.group("User Info");
console.log("Name: John Doe");
console.log("Age: 25");
console.log("City: New York");
console.groupEnd();

console.groupCollapsed("Collapsed Group Example");
console.log("This content is collapsed by default.");
console.groupEnd();





// QUESTION - 6
// IN COUNST YOU CAN NOT CHANGE THE VLAUE LIKE ARRAY TO INTEGER BUT WE CAN UPDATE THE VALUE...
const person = { name: "Alice", age: 25, city: "New York" };
console.log("Before update:", person);

// Modifying properties
person.age = 26;
person.city = "Los Angeles";

// Adding a new property
person.country = "USA";

console.log("After update:", person);
// TO COMPLETELY CONSTENT OBJECT
Object.freeze(person);






// QUESTION - 7
let str = "50";

// Method 1: Using Number()
let num1 = Number(str);
console.log(num1, typeof num1); // 50 "number"

// Method 2: Using parseInt()
let num2 = parseInt(str);
console.log(num2, typeof num2); // 50 "number"

// Method 3: Using Unary `+` Operator
let num3 = +str;
console.log(num3, typeof num3); // 50 "number"





// QUESTION - 8
let str1 = "JavaScript";

// Method 1: Using .indexOf()
console.log(str1.indexOf("Script") !== -1); // true

// Method 2: Using .search()
console.log(str1.search("Script") !== -1); // true




// QUESTION - 9
let numbers = [10, 20, 30, 40, 50];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum); // Sum: 150




// QUESTION - 10
let a1; // Undefined
console.log(a1); // undefined

let b1 = null; // Explicitly assigned null
console.log(b1); // null

let c1 = "hello" / 2; // Invalid math operation
console.log(c1); // NaN
console.log(typeof NaN); // "number" (weird JS quirk)