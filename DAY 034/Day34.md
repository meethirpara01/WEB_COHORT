
## ✅ Pattern Programming 
---

### 🔹 **Q39. Right-Aligned Triangle of Stars**

#### Output:

```
        * 
      * * 
    * * * 
  * * * * 
* * * * * 
```

#### ✅ Code:

```javascript
function rightAlignedTriangle(n) {
  for (let i = 1; i <= n; i++) {
    for (let space = 1; space <= n - i; space++) {
      process.stdout.write("  ");
    }
    for (let star = 1; star <= i; star++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}
rightAlignedTriangle(5);
```

#### 🧠 Algorithm:

* Print `(n - i)` spaces before printing `i` stars.
* Each `*` followed by a space for alignment.
* Use `console.log()` after each row.

---

### 🔹 **Q20. Left-Aligned Triangle (Simple Right Angle)**

#### Output:

```
*
* *
* * *
* * * *
* * * * *
```

#### ✅ Code:

```javascript
function leftTriangle(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}
leftTriangle(5);
```

#### 🧠 Algorithm:

* Standard right-angle triangle.
* Outer loop controls rows; inner loop prints stars.

---

### 🔹 **Q21. Inverted Hourglass or X-Shaped Triangle**

#### Output:

```
*         *
  *      *
    *   *
     * *
      *
```

#### ✅ Code:
for(let i=1;i<=n;i++){
   for(let j=1;j<=(2*n)-1;j++){
     if(i==j || i+j == 2*n)process.stdout.write("* ")
     else process.stdout.write("  ")   
   }
}
#### 🧠 Algorithm:
Algorithm Explanation (Step-by-step):
Purpose:
To print a pattern that forms an 'X' shape in the upper n rows of a square grid of size (2n - 1) columns.

Outer loop (i = 1 to n):
Controls the number of rows to be printed.

Inner loop (j = 1 to 2n - 1):
Controls the columns for each row.

Condition check:
i == j: This prints a star * at the left diagonal position (from top-left to bottom-right).

i + j == 2 * n: This prints a star * at the right diagonal position (from top-right to bottom-left).

Else block:
If neither condition is met, print spaces to maintain the grid structure.

Line break:
After each row, use console.log() to move to the next line..

---

### 🔹 **Q22. Diamond X Pattern**

#### Output:

```
*           *
  *       *
    *   *
      *
    *   *
  *       *
*           *
```

#### ✅ Code:

```javascript
for(let i=1;i<=n;i++){
   for(let j=1;j<=n;j++){
     if(i==j || i+j == n+1)process.stdout.write("* ")
     else process.stdout.write("  ")   
   }
}

```

#### 🧠 Algorithm Explanation:
Input: An integer n, the number of rows and columns in the square.

Outer Loop (rows):
Iterate i from 1 to n. This loop represents each row.

Inner Loop (columns):
Iterate j from 1 to n. This loop represents each column in a row.

Conditions for printing *:
Primary diagonal: i == j
➤ This prints a * from top-left to bottom-right.

Secondary diagonal: i + j == n + 1
➤ This prints a * from top-right to bottom-left.

Else case:
If neither diagonal condition is true, print two spaces " " to preserve alignment.

Newline:
After finishing all columns in a row, move to the next line with console.log().