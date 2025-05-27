// OOPS
// FOR REFRENCE WATCH NOTES

// OLD-Constructer Function
function Ghar()
{
    this.city = "SURAT";
    this.kamre = 3;
    this.bathroom = 2;
    this.Kitchen = 2;
}

let ghar1 = new Ghar();
let ghar2 = new Ghar();
console.log(ghar1);


function Toffee(flavor, price, expiry)
{
    this.flavor = flavor;
    this.price = price;
    this.expiry = expiry;
}
let t1 = new Toffee('Vanilla', 10, '2023-12-31');
let t2 = new Toffee('chocolate', 80, '2024-01-31');
let t3 = new Toffee('Storawberry', 50, '2024-11-30');
console.log(t1);
console.log(t2);
console.log(t3);

// AFTER CLASS IN JS 
// NEW 
// ADD HABIT AFTER CREATE CLASS FIRST OF ALL CREATE CONSURCTER
class People
{
    constructor(name, age, pattan, student)
    {
        this.name = name;
        this.age = age;
        this.pattan = pattan;
        this.student = student;
    }
}
let p1 = new People('MEET', 19, 'GUITAR', true);
console.log(p1);
