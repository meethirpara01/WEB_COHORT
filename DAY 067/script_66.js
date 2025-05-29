// Fetch
// Github Api
// api.github.com/users/asynchronousjavascriptor
// Fetch Always make a Promise


let btn = document.querySelector('#btn');
btn.addEventListener('click', function ()
{
    fetch("https://api.github.com/users/meethirpara01")
    .then((raw) => raw.json())
    .then((data) => console.log(data))
});

