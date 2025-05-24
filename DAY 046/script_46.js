arr = 
[
    {
        username:'MEET',
        age:'20',
        married:false,
        isstatus: 'Strenger',
        Image : 'https://images.unsplash.com/photo-1710646420894-660f1244710b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        username:'Dinesh',
        age:'18',
        married:true,
        isstatus: 'Strenger',
        Image : 'https://images.unsplash.com/photo-1598987436590-566fbdba5c06?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        username:'Sahil',
        age:'19',
        married:false,
        isstatus: 'Strenger',
        Image : 'https://images.unsplash.com/photo-1562383780-8486ec2b261e?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

var main = document.querySelector('#main');
function herofunc()
{
    var sum = ' '

    arr.forEach(function(elem, idx) 
    {
        sum += `<div class="card">
            <img src="${elem.Image}" alt="" srcset="">
            <h1>${elem.username}</h1>
            <h2>${elem.age}</h2>
            <h4>Maried: ${elem.married}</h4>
            <h5>Status: ${elem.isstatus}</h5>
            <button id = ${idx} class = 'btn'>Add Friend</button>
        </div>`
    });
    main.innerHTML = sum;
}

herofunc()
main.addEventListener('click', function(dets)
{
    var gold =  arr[dets.target.id];
    if (gold.isstatus == 'Strenger') 
    {
        gold.isstatus = 'Firend';
    }
    else
    {
        gold.isstatus = 'Strenger';   
    }
    herofunc()
});