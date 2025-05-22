
# Callback Functions vs Higher-Order Functions in JavaScript

## Key Definitions

### Callback Function
A **callback function** is a function that is **passed as an argument** to another function and is **executed later**.

### Higher-Order Function (HOF)
A **higher-order function** is a function that either:
- Takes one or more functions as arguments, **OR**
- Returns a function.

---

## Clarification of the Statement

### ❌ Incorrect Statement:
> "Every callback function can be a higher-order function, but every higher-order function cannot be a callback function."

### ✅ Correct Understanding:

- **Every callback function is NOT necessarily a higher-order function.**
- **Every higher-order function is NOT necessarily a callback function.**

---

## Examples

### 1. Callback Function (Not a Higher-Order Function)

```javascript
function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); // Executing the callback
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
```

- `sayGoodbye` is a **callback function**.
- `greet` is a **higher-order function**.
- `sayGoodbye` is **NOT a higher-order function**, because it does not accept or return another function.

---

### 2. Higher-Order Function (Not a Callback Function)

```javascript
function multiplyBy(factor) {
    return function (num) {
        return num * factor;
    };
}

const double = multiplyBy(2);
console.log(double(5)); // 10
```

- `multiplyBy` is a **higher-order function** because it returns another function.
- It is **not a callback function**, because it's not passed to another function.

---

## Summary

- ✅ **"Every callback function is not necessarily a higher-order function."**
- ✅ **"Every higher-order function is not necessarily a callback function."**
