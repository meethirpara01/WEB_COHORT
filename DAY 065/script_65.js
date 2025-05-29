function getDetails(username, callbackfnc)
{
    setTimeout(function()
    {
        console.log('Sending the request to instagram...');
    }, 1000);

    setTimeout(function()
    {
        console.log(`Fetching data of ${username}...`);
    }, 3000);

    setTimeout(function()
    {
        callbackfnc();
    }, 6000);
}
getDetails('Meet Hirpara', function()
{
    console.log('Data Saved In Gallary.');
    
});

 

function stepOne(cb) 
{
    console.log('Step 1');
    cb();
}
function stepTwo(cb) 
{
    console.log('Step 2');
    cb();
}
function stepThree(cb) 
{
    console.log('Step 3');
    cb();
}

stepOne(() =>
{
    stepTwo(() =>
    {
        stepThree(() =>
        {
            console.log("All Function Calles...");
        })
    });
}); // CALLBACK HEAL
// TO SOLVE THIS CALLBACK HEAL WE USE OF PROMISESS

// const pr = new Promise(function (res, rej)
// {
//     console.log('Sending the request to instagram...');
//     console.log('Fetching data of...');
//     console.log('GOT ERROR In Collecting Data From Instagram...');
//     rej();
// });

// pr.then(function()
// {
//     console.log("Resolved.");
// }).catch(function ()
// {
//     console.log("Rejected.");
// });




function sOne() 
{
    return new Promise(function (res, rej)
    {
        console.log('Step 1');
        res();
    });
    
}
function sTwo() 
{
    return new Promise(function (res, rej)
    {
        console.log('Step 2');
        res();
    });
}
function sThree(cb) 
{
    return new Promise(function (res, rej)
    {
        console.log('Step 3');
        res();
    });
}

sOne()
    .then(sTwo)
    .then(sThree)
    .then(function () 
    {
        console.log("All Steps Done.");
    });