/*var btn = document.querySelector('button');
var h5 = document.querySelector('h5');
let map = 0;
btn.addEventListener('click', Friend);
function Friend()
{
    if (map == 0) 
    {
        setTimeout(function() 
        {
            h5.innerHTML = 'Friend'
            h5.style.color = 'green'
            btn.innerHTML = 'Remove Friend'
            console.log('Add Firend Succsefully');
            map = 1
        }, 2500)
    }
    else
    {
        h5.innerHTML = 'Stranger'
        h5.style.color = 'red'
        btn.innerHTML = 'Add Friend'
        console.log('Remove Firend Succsefully');
        map = 0
    }
}*/

var btn1 = document.querySelector('.btnD');
var Amount = document.querySelector('.Amount');
var growth = document.querySelector('.growth')
var grow = 0;
var ren = (Math.floor(Math.random()*11)) + 1;

function Down(btn1, Amount, growth, grow, ren) 
{
    var gro = setInterval(function ()
    {
        grow++;
        Amount.innerHTML = `${grow}%`
        growth.style.width = grow + '%';
        btn1.innerHTML = 'Downloaed';
        btn1.style.opacity = 0.5;

    }, (ren*10))
    setTimeout(() =>
    {
        clearInterval(gro)
        btn1.innerHTML = 'Download';
        btn1.style.opacity = 1;
    },(ren*1000))
    
    
}
btn1.addEventListener('click', function()
{
    var ren = Math.floor(Math.random()*11);
    console.log(ren);
    console.log('Downloading Time ' + ren);
    
    Down(btn1, Amount, growth, grow, ren);
    
})
