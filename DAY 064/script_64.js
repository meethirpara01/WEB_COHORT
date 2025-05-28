// READ THE NOTES THAN READ THIS EXAMPLE
console.log("Hey");
setTimeout(function ()
{
    console.log("Hey 3");
}, 0);
Promise.resolve().then(function ()
{
    console.log("Heey 2");
});
console.log("Hey 4");
// AND THIS EXAMPLE'S SOLUTION IN NEXT DAY'S LECTURE

