const express = require('express');

const app = express();

app.use(express.json()); // IT's An Midware To show Actule Data From Undefine
/* notes => title & description */ 
let notes = [];
app.post("/notes", (req, res) =>
{
    console.log(req.body);
    notes.push(req.body);
    res.json({
        message: "Note Added Succssfully",
        notes: notes
    });
});

app.listen(3000, () =>
{
    console.log("Server Is Runing On Port 3000");
});