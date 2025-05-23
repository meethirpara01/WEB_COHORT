var prompt = require("prompt-sync")();
let n = Number(prompt('Enter A Number : '));
console.log(n);

for (let i = 0; i < n; i++) 
{
    let temp = 65;
    for (let j = 0; j <= i; j++)
    {
        process.stdout.write(String.fromCharCode(temp) + " ");
        temp++;
    }
    console.log();
}


console.log();
for (let i = 0; i < n; i++) 
{
    for (let j = 0; j <= n-i-1; j++)
    {
        process.stdout.write("* ");
    }
    console.log();
}

console.log();
for (let i = 0; i < n; i++) 
{
    for (let j = 0; j < n-i-1; j++)
    {
        process.stdout.write("  ");
    }
    for (let j = 0; j <= i; j++)
    {
        process.stdout.write("* ");
    } 
    console.log();
}


console.log();
for (let i = 0; i < n; i++) 
{
    for (let j = 0; j <= n-i-1; j++)
    {
        process.stdout.write(" ");
    }
    for (let j = 0; j <= i; j++)
    {
        process.stdout.write("* ");
    } 
    console.log();
}

console.log();
for (let i = 1; i <= n; i++) 
{
    for (let j = 1; j <= n; j++)
    {
        if (i == j || i + j === (n + 1)) 
            process.stdout.write("*"); 
        else
            process.stdout.write(" ");
    }
    console.log();
}

console.log();
for (let i = 1; i <= n; i++) 
{
    for (let j = 1; j <= ((n*2)-1); j++)
    {
        if (i == j || i + j === (n * 2)) 
            process.stdout.write("*"); 
        else
            process.stdout.write(" ");
    }
    console.log();
}