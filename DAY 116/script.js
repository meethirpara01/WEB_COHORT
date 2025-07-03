// REST, SOAP, RPC AND GRAPHQL

// Api Is An communicator Between Two Application Like Web Application And Server Application.
// General Api Can Communicate In Any Way..
// But In REST Api We Give An Set Of Rules And Guidelines It Means We Give An Particular Way To Communicate.
// And This REST Api Use HTTP Methods Like Get, Post, Put, Delete For Communicate.

const express = require("express");


const app = express();  // CREATE SERVER

app.get('/home', (req, res) =>
{
    res.send("Welcome To Home Page!");
});

app.get('/about', (req, res) =>
{
    res.send("Welcome To About Section!");
});

app.listen(3000, () =>
{
    console.log("Server is Runing on port 3000");
});