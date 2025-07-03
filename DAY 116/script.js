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