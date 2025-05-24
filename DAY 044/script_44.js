// var img1 = document.querySelector('#img1');
// var img2 = document.querySelector('#img2');
// var swap = document.querySelector('.swap');
// swap.addEventListener('click', function()
// {
//     var img1s = img1.getAttribute('src');
//     var img2s = img2.getAttribute('src');
//     img1.setAttribute('src', img2s);
//     img2.setAttribute('src', img1s);
// })


// var h1 = document.createElement('h1');
// h1.innerHTML = "MY NAME IS MEET";
// var body = document.querySelector('body');
// body.appendChild(h1);


var CE = document.querySelector('.CE');
CE.addEventListener('click', function()
{
    
    var img = document.createElement('img');
    // img.src = 'Chhta BHim.png';
    img.setAttribute('src', 'Chhta BHim.png');
    img.setAttribute('class', 'images');
    var x = Math.random() * 90;
    var y = Math.random() * 90;
    var rot = Math.random() * 360;

    img.style.left = x + '%';
    img.style.top = y + '%';
    img.style.rotate = rot + 'deg';
    // img.style.height = '200px';
    // var body = document.querySelector('body');
    document.body.appendChild(img);
})

var box = document.querySelector('.box');

box.addEventListener('click', function()
{
    console.log('Clicked');
});

box.addEventListener('dblclick', function()
{
    console.log('Double Clicked');
});

box.addEventListener('mouseenter', function()
{
    document.body.style.backgroundColor = 'white';
    console.log('Mouse Enterd');
});

box.addEventListener('mouseleave', function()
{
    document.body.style.backgroundColor = 'black'
    console.log('Mouse Leave');
});

let grow = 0
box.addEventListener('mousemove', function(dets)
{
    console.log('Mouse Move', grow++);
    console.log(dets);
});

document.addEventListener('mousemove', function(dets)
{
    console.log(dets.x);
});

document.addEventListener('click', function(dets)
{
    console.log(dets);
});

document.addEventListener('keypress', function(dets)  // This Event Perform Only On Document(HTML)
{
    console.log(dets);
});

document.addEventListener('keydown', function(dets)  // This Event Perform Only On Document(HTML)
{
    console.log(dets);
});

document.addEventListener('scroll', function(dets)  // Work with side scroll line
{
    console.log(dets);
});

document.addEventListener('wheel', function(dets)  // Work on only mouse wheel
{
    console.log(dets);
});



