var prompt = require("prompt-sync")();
let n = prompt('Enter A Number : ');
console.log(n);

for (let i = 0; i < n; i++) 
{
    for (let j = 0; j < n; j++)
    {
        process.stdout.write("* ");
    }
    console.log();
}

console.log();
for (let i = 0; i < n; i++) 
{
    for (let j = 0; j <= i; j++)
    {
        process.stdout.write("* ");
    }
    console.log();
}

console.log();
for (let i = 0; i < n; i++) 
{
    for (let j = 0; j <= i; j++)
    {
        process.stdout.write((j + 1 ) +" ");
    }
    console.log();
}

console.log();
for (let i = 0; i < n; i++) 
{
    for (let j = i; j > 0; j--)
    {
        process.stdout.write("* ");
    }
    console.log();
}