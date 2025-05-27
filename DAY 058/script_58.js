// PROTOTYPE
// FOR REFRENCE WATCH NOTES

function Toffee(name, expiry)
{
    this.flavor = name;
    this.expiry = expiry;
}
Toffee.prototype.price = 20; 


let t1 = new Toffee('Alpenliebe', '2023-12-31');
let t2 = new Toffee('Kachha aam', '2024-01-31');
console.log(t1);
console.log(t2);


function Human(name, age, ishandsome)
{
    this.name = name;
    this.age = age;
    this.ishandsome = ishandsome;
}

Human.prototype.sayHello = function() 
{
    console.log('Hello Ji');
};
let h1 = new Human('Meet', 19, true);
let h2 = new Human('Parth', 24, true);
console.log(h1);
console.log(h2);


function Toffee1(name)
{
    this.flavor = name;
    this.price = 50;
}
Toffee1.prototype.price = 20; 

let t01 = new Toffee1('Alpenliebe');
console.log(t01);


function CarModel(name, price, model)
{
    this.name = "#)" + name;
    this.price = price;
    this.model = "#1:- " + model;
    this.PrintName = function()
    {
        console.log(this.name);
    }
    this.PrintModel = function()
    {
        console.log(model);
    }
}

let c1 = new CarModel('BMW', '7000 USD', 'M5 CS');
console.log(c1);
c1.PrintName();
c1.PrintModel();



function Employee(name, age, salary, id)
{
    this.name = "#)" + name;
    this.age = age;
    this.salary = "#)" + salary;
    this.id = "#1" + id;
}

Employee.prototype.PrintDeails = function()
{
    console.log(`MY NAME IS ${this.name} AND I AM ${this.age} YEARS OLD AND MY SALARY IS ${this.salary} AND THIS IS MY ID ${this.id}.`);
}

let e1 = new Employee('MEET', '19', '100000', 7);
console.log(e1);
e1.PrintDeails();