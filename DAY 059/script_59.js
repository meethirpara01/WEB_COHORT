// LIBRARY
class Library
{
    constructor()
    {
        this.books = [];
    }
    addBooks(books)
    {
        this.books.push(...books);
    }
    listAllBooks()
    {
        this.books.forEach(function (book, index)
        {
            console.log(`${index + 1}) ${book.name} by ${book.author}`);
        });
    }
}

class Book
{
    constructor(name, isbn, price, author)
    {
        this.name = name;
        this.isbn = isbn;
        this.price = price;
        this.author = author;
        this.readStatus = false;
    }
    info()
    {
        console.log(`${this.readStatus ? `✅` : `❌`} ${this.name} is written by ${this.author} and you have ${this.readStatus ? `alredy read it` : `not read this book`} and is available at amazon at price range of ${this.price}.`);  
    }

    changeReadStatus()
    {
        this.readStatus = !this.readStatus; 
    }
}
let book1 = new Book('Wealth is Life', '2fse6sf56r', '140', 'Meet Hirpara')
let book2 = new Book('Adventure', 'e15rs61vf3d35rg', '1660', 'Ajay Raj')
let book3 = new Book('DO Apic Shit', 'c15e3se6sf56r', '500', 'Kartik Sarma')
let book4 = new Book('69', '6ysf5t265yfh4gerd', '120000', 'Gupta Chanchd')
// book1.info();
// console.log(book1);


let jhansiLibrary = new Library();
jhansiLibrary.addBooks([book1, book2  , book3, book4]);
jhansiLibrary.listAllBooks();
console.log(jhansiLibrary);

console.log();
console.log();

let suratLibrary = new Library();
suratLibrary.addBooks([book1, book2, book3, book4]);
suratLibrary.listAllBooks();
console.log(suratLibrary);







// MOBAILE SHOP
class MobileShop 
{
  constructor() 
  {
    this.mobiles = [];
  }

  addMobiles(mobiles) 
  {
    this.mobiles.push(...mobiles);
  }

  listAllMobiles() 
  {
    this.mobiles.forEach(function (mb, index) 
    {
      console.log(`${index + 1}) ${mb.brand} - ${mb.model} - ${mb.color} - ${mb.price} - ${mb.sims[0].brand}`);
    });
  }
}

class Mobile 
{
  constructor(brand, model, price, color) 
  {
    this.id = Math.floor(Math.random() * 100000);
    this.model = model;
    this.color = color;
    this.brand = brand;
    this.price = price;
    this.sims = [];
  }
  getMobileInfo() 
  {
    console.log(`${this.brand} - ${this.model} = ${this.price} - ${this.color}`);
  }
  insertSim(sim) 
  {
    if (this.sims.length === 2) 
    {
        console.log("sorry you already have 2 sims installed.");
        return;
    }
    this.sims.push(sim);
  }
}

class Sim 
{
  constructor(brand, balance) 
  {
    this.brand = brand;
    this.balance = balance;
  }
  addBalance(balance) 
  {
    if (balance < 0)
    {
      console.log("to add balance give amount greater than 0");
      return;
    }
    this.balance += balance;
  }
}

let myMobileShop = new MobileShop();
let samsung = new Mobile("Samsung", "Galaxy s23 ultra", 120000, "black");
let tatadocomo = new Sim("tata docomo", 300);

samsung.insertSim(tatadocomo);
myMobileShop.addMobiles([samsung, samsung]);
myMobileShop.listAllMobiles();


