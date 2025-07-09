const express = require("express");
const connectDB = require("./src/db/db");
const notemodel = require("./src/models/note.model");
const noteModel = require("./src/models/note.model");


const app = express();
connectDB();
app.use(express.json());

app.post('/notes', async (req, res) =>
{
    const {title, content} = req.body;

    console.log(title, content);

    await notemodel.create({
        title, content
    });

    res.json({
        massage: "NOTE CREATED SUCCSSFULLY"
    })
    
});

app.get('/notes', async (req, res) =>
{
    const notes = await notemodel.find();

    res.json({
        message: "NOTES FATCH SUCCSSFULLY",
        notes
    })
});

app.delete('/notes/:id', async (req, res) =>
{
    const noteid = req.params.id;

    await notemodel.findOneAndDelete({
        _id: noteid
    });

    res.json({
        message: "NOTES SUCCSSFULLY DELETED"
    })

});

app.patch('/notes/:id', async (req, res) =>
{
    const noteId = req.params.id;
    const {title} = req.body;

    await noteModel.findOneAndUpdate({
        _id: noteId
    }, {
        title: title
    });

    res.json({
        message: "NOTES UPDATED SUCCSSFULLY"
    })
})


app.listen(3000, () =>
{
    console.log("Server Is Running On Port 3000");
    
})