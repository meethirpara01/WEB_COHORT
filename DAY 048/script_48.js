// 1. LOCAL STORAGE 
// 2. SESSION STORAGE 
// 3. COOKIE 
// 4. WINDOW OBJECT 
// 5. CHILD NODES


// console.log(window);
// var btn = document.querySelector('button');

// btn.addEventListener('click', function()
// {
//     // location.reload();
//     location.href = 'https://unsplash.com/';

// })
var a = location.href;
var b = navigator.userAgent;
var c = navigator.onLine;
console.log(a);
console.log(b);
console.log(c);

// var btn1 = document.querySelector('.btn1');
// btn1.addEventListener('click', function()
// {
//     history.back();
// });

// var btn2 = document.querySelector('.btn2');
// btn2.addEventListener('click', function()
// {
//     console.log('Helllo');
//     history.forward();
// });


localStorage.clear();
localStorage.setItem('user','meet');
localStorage.setItem('age',20);
var user = localStorage.getItem('user', 'meet');
console.log(user);
localStorage.removeItem('age');

var arr = [10, 20, 30, 40, 50];
localStorage.setItem('Array', arr);
var NewArr = JSON.stringify(arr);
console.log(NewArr);
localStorage.setItem('NEWARR', NewArr);

var obj = 
[   
    {
        user:'Meet',
        age:20,
        city:'Surat'
    },
    {
        user:'Dinesh',
        age:20,
        city:'Odisa'
    },
    {
        user:'Sahil',
        age:20,
        city:'Ahemdabad'
    },
];
console.log(obj);
localStorage.setItem('OBJ', obj);

var NewObj = JSON.stringify(obj);
console.log(NewObj);
localStorage.setItem('NEWOBJ', NewObj);
// BUT IN THIS LOCAL STORAGE WHEN WE ERASE THE ALL CODE IT STILL APPEARS IN FORM OF NewObj TO GET IN OBJECT FORM WRITE parse();
var PreousForm = JSON.parse(NewObj)
console.log(PreousForm);




sessionStorage.setItem('Users', 'Meet');
// BUS IN SESSIONSTORAGE WHEN WE ERASE THE CODE STOREGE AUTOMATICALY DELETED IT'S DIFFRENTE FROM LOCALSTORAGE
sessionStorage.clear();




document.cookie = 'User = Meet';
console.log(document.cookie);



var box = document.querySelector('.box');
box.addEventListener('click', function()
{
    box.classList.add('circle');
})

box.classList.remove('circle');

document.body.classList.toggle('dark');


