var button = document.querySelector('#btn');
var cgc = document.querySelector('#cg');

button.addEventListener('click', function () {
    var c1 = Math.floor(Math.random()*256);
    var c2 = Math.floor(Math.random()*256);
    var c3 = Math.floor(Math.random()*256);

    cgc.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
})


let arr = ['GT', 'RCB', 'CSK', 'MI', 'KKR', 'LSG', 'PKBG', 'DC', 'RR'];

var button1 = document.querySelector('#btn1');
var team = document.querySelector('#Team');

button1.addEventListener('click', function () {

    let num = Math.floor(Math.random()*arr.length);
    team.innerHTML = arr[num];
})


var arrOfObj = 
[
    {
        team:'CSK',
        primary:'Yellow',
        secondary:'green'
    },
    {
        team:'RCB',
        primary:'red',
        secondary:'black'
    },
    {
        team:'MI',
        primary:'blue',
        secondary:'green'
    },
    {
        team:'KKR',
        primary:'purple',
        secondary:'gold'
    },
    {
        team:'SRH',
        primary:'orenge',
        secondary:'black'
    },
    {
        team:'RR',
        primary:'pink',
        secondary:'blue'
    },
    {
        team:'GT',
        primary:'blue',
        secondary:'black'
    },
    {
        team:'LSG',
        primary:'blue',
        secondary:'red'
    },
    {
        team:'DC',
        primary:'blue',
        secondary:'white'
    },
];

var button2 = document.querySelector('#btn2');
var team1 = document.querySelector('#Team1');

button2.addEventListener('click', function () {

    let num = Math.floor(Math.random()*arrOfObj.length);
    var winner = arrOfObj[num];
    team1.innerHTML = winner.team;
    team1.style.color = winner.primary;
    team1.style.backgroundColor = winner.secondary;
    
})


