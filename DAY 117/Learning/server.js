// NPM => NODE PACKAGE MANAGER
// NPX => NODE PACKAGE EXECUTER - DIRECT EXECUTE PACKAGE FROM NPM WEBSITE
// WHEN WE NEED TO EXECUTE PACKAGE ON JS FILE THAN WE USE OF NPM
// WHEN WE NEED TO EXECUTE PACKAGE ON TERMINAL THAN WE USE OF NPX 

const express = require("express");

const app = express();

app.get('/home', (req, res) =>
{
    res.send("Wlcome To Home Page!!");
});

app.get('/about', (req, res) =>
{
    res.send("Welcome To About Page!!")
});

app.listen(3000, () =>
{
    console.log("Server Is Running On Post 3000");
});