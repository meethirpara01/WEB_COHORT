// 1. Create a function that takes a callback and executes it after every `n` seconds indefinitely.
function repeatFunction(fn, time) {
    setInterval(fn, time * 1000);
}

repeatFunction(function(){
    console.log("Hello");
    
}, 2);


// 2. Implement a function that returns a function with a preset greeting (Closure).
function GreetSetup(greeting)
{
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}

var I = GreetSetup("Hello");
I("MEET");
I("PARTH");
I("DINESH");


var S = Greet("HOLA !");
S("MEET");
S("PARTH");
S("DINESH");



// 3. Implement a function that takes a callback and only executes it once (HOF + Closure).
function OnlyOnce(callback) {
    let executed = false;
    return function()
    {
        if (!executed) {
            executed = true;
            callback();
        }
        else{
            console.error("Alredy Executed Once");
        }
    }
}

var newfnc = OnlyOnce(function ()
{
    console.log("RUN");
});

newfnc();
newfnc();
newfnc();


// 4. Implement a function that throttles another function (HOF + Closures).
function throt(fn, delay)
{
    let lastcall = 0;
    return function()
    {
        let currcall = Date.now();
        if (currcall - lastcall >= delay)
        {
            lastcall = currcall;
            fn();
        }
    };
}

var newfnc = throt(function() {
    console.log("WILL RUN IN 2 SECONDS");
}, 2000);

newfnc();
newfnc();
newfnc();
newfnc();
