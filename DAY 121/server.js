const express = require("express");
const connectToDB = require('./src/db/db');

// Server Database Se Connect Hoga Server.js File Me

connectToDB();
const app = express();
app.use(express.json());

app.get("/", (req, res) =>
{
    res.send("Hello World");
});

app.post("/notes", (req, res) =>
{
    const {title, content} = req.body;
    console.log(title, content);
    // console.log(req.body);
})

app.listen(3000, () =>
{
    console.log("Server Is Running On POrt 3000");
});