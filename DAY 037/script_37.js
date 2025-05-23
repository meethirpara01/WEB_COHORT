// DOM - Document Object Model 
// Frontend Ki JavaScript

// 4(FOUR) Pillars of DOM  
// 1. Selection of an Element ✅✅
// 2. Changing HTML ✅✅
// 3. Changing CSS ✅✅
// 4. Event Lisners ✅✅


// var h1 = document.querySelector('h1');
// h1.innerHTML = 'Click Here';
// h1.style.backgroundColor = 'red';
// h1.addEventListener('click', function() 
// {
//     h1.innerHTML = 'DOM';
//     h1.style.backgroundColor = 'green';
// });
// ✅


// ✅✅
// var BOX = document.querySelector('#box');
// YOU CAN ALSO SELECTE WITH THIS 
// var BOX = document.getElementById('box');
// BOX.innerHTML = 'Changed'

//WHEN WE APPLY QUARY SELECTOR FOR EXAMPLE H1 THAN IT TAKE FIRST H1 ONLY AFTER THAT IN HTML FILE HOW MANY H1 ARE EXIST DOSE NOT MATTER

// BUT IF UOY WANT TO TAKE ALL H1 THAN,

// var h1 = document.querySelectorAll('h1'); // NODELIST
// var HF = document.getElementById('First');
// console.log(h1[0]);
// h1[1].innerHTML = 'FIRST HEADING';
// console.log(h1[1]);
// console.log(h1[2]);
// console.log(h1[3]);

// 1. Selection of an Element ✅✅



// ✅✅
// var BOX = document.querySelector('#box');
// BOX.textContent = 'textContant'
// BOX.innerHTML = '<i>Changed</i>'

// 2. Changing HTML ✅✅
// 3. Changing CSS ✅✅


// ✅✅
// function changeBox() 
// {
//     console.log('Function Running');
//     box.style.backgroundColor = 'orange';
// }
// var button = document.querySelector('button')
// var box = document.querySelector('#box');

// button.addEventListener('click', changeBox)
// 4. Event Lisners ✅✅




// TASK ADD AND REMOVE FIREND

var btn = document.querySelector('button');
var h5 = document.querySelector('h5');
let map = 0;
btn.addEventListener('click', Friend);
function Friend()
{
    if (map == 0) 
    {
        h5.innerHTML = 'Friend'
        h5.style.color = 'green'
        btn.innerHTML = 'Remove Friend'
        console.log('Add Firend Succsefully');
        map = 1
    }
    else
    {
        h5.innerHTML = 'Stranger'
        h5.style.color = 'red'
        btn.innerHTML = 'Add Friend'
        console.log('Remove Firend Succsefully');
        map = 0
    }
}