Here is the **JavaScript solution with algorithm explanations** for all the listed questions:

---

### ✅ Q1. Print "Hello World" N Times

```js
function printHelloWorld(n) {
  for (let i = 1; i <= n; i++) {
    console.log("Hello World");
  }
}
printHelloWorld(5);
```

**Algorithm**:

* Loop from `1` to `n` and print "Hello World" on each iteration.

---

### ✅ Q2. Print Natural Numbers up to N

```js
function printNatural(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
printNatural(5);
```

**Algorithm**:

* Traverse from `1` to `n` and print each number.

---

### ✅ Q3. Reverse Loop (Print N to 1)

```js
function reverseNatural(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}
reverseNatural(5);
```

**Algorithm**:

* Loop from `n` to `1` in reverse using `i--`.

---

### ✅ Q4. Table of a Number (up to 10 terms)

```js
function printTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}
printTable(5);
```

**Algorithm**:

* Loop from 1 to 10, multiply with `num`, and print.

---

### ✅ Q5. Sum Up to N Terms

```js
function sumUptoN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log("Sum:", sum);
}
sumUptoN(5);
```

**Algorithm**:

* Use a variable `sum`, loop from `1` to `n`, and accumulate in sum.

---

### ✅ Q6. Factorial of a Number

```js
function factorial(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  console.log("Factorial:", fact);
}
factorial(5);
```

**Algorithm**:

* Initialize `fact=1`, multiply `i` from `2` to `n`.

---

### ✅ Q7. Sum of Even and Odd Numbers in Range

```js
function evenOddSum(n) {
  let even = 0, odd = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) even += i;
    else odd += i;
  }
  console.log("Even Sum:", even);
  console.log("Odd Sum:", odd);
}
evenOddSum(10);
```

**Algorithm**:

* Loop from `1` to `n`, check parity using `%2`, and sum accordingly.

---

### ✅ Q8. All Factors of a Number

```js
function printFactors(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) console.log(i);
  }
}
printFactors(12);
```

**Algorithm**:

* Loop from `1` to `n`, if `n % i === 0`, then `i` is a factor.

---

### ✅ Q9. Check Prime (Three Methods)

---

#### ➤ Method 1: Check from 1 to n

```js
function isPrime1(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count++;
  }
  return count === 2;
}
console.log(isPrime1(7)); // true
```

* **Time Complexity**: O(n)

---

#### ➤ Method 2: Check from 2 to n/2

```js
function isPrime2(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime2(7)); // true
```

* **Time Complexity**: O(n/2)

---

#### ➤ Method 3: Optimized (sqrt(n))

```js
function isPrime3(n) {
  if (n <= 1) return false;
  if(n == 2) return true;
  if(n%2 == 0) return false;
  for (let i = 3; i * i <= n; i+=2) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime3(7)); // true
```

* **Time Complexity**: O(√n)
* **Why Efficient?** Because any non-prime number `n` must have at least one factor less than or equal to √n.

---

