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

app.get("/notes", (req, res) =>
{
    res.json(notes);
});

app.delete('/notes/:index', (req, res) =>
{
    const index = req.params.index;
    delete notes[index];
    res.json({
        message: "note Deleted Successfully",
    });
});

/* PATCH /notes/:index => {title} */
app.patch('/notes/:index', (req, res) =>
{
    const index = req.params.index;
    const {title} = req.body;
    notes[index].title = title;
    res.json({
        message: "note Updated Successfully",
    });
});

app.listen(3000, () =>
{
    console.log("Server Is Runing On Port 3000");
});