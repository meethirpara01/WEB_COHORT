// SOMETHING BUILD WITH PROMISESS
// 1. Food Diliverd Or Not ?
function FoodOrder() 
{
    return new Promise((res, rej) =>
    {
        let change = Math.random() < .7;
        if (change) res();
        else rej();
    });
}

FoodOrder()
    .then(() =>
    {
        console.log('🍕 Food Diliverd.');
    })
    .catch(() =>
    {
        console.log('🚫 Food Not Diliverd.');
    });


// 2. Print User Data
function getUser()
{
    return new Promise((res, rej) =>
    {
        setTimeout(() => 
        {
            res({id: 1, name: 'Meet Hirpara'});
        }, 1000);
    });
}

function getPost(userId)
{
    return new Promise((res, rej) =>
    {
        setTimeout(() => 
        {
            res(['Title 1','Title 2','Title 3']);
        }, 1000);
    });
}

function getComments(postId)
{
    return new Promise((res, rej) =>
    {
        setTimeout(() => 
        {
            res(['Greate 📈', '🔥','❤️🙌🏻']);
        }, 1000);
    });
}

getUser()
    .then(function(data)
    {
        console.log(data);
        return getPost(data.id);
    })
    .then(function(titles)
    {
        console.log(titles);
        return getComments('Wow');
    })
    .then(function(comments)
    {
        console.log(comments);
    })
    .finally(function ()
    {
        console.log('All Data Fetched');
    });
    

// 3. Fake API Delay
function fackApiCall(endpoint)
{
    const data = 
    {
        users : ['Meet', 'Parth', 'Martin'],
        posts : ['Hay Champs', 'Greate 🔥', '❤️🙌🏻']
    }

    let delay = Math.random() * 6000 + 4000;
    return new Promise ((res, rej) =>
    {
        setTimeout(() =>
        {
            res(data[endpoint]);
        }, delay);
    });
}

fackApiCall('users')
    .then(function(data)
    {
        console.log(data);
    });

fackApiCall('posts')
    .then(function(data)
    {
        console.log(data);
    });