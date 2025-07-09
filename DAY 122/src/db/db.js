const mogoose = require("mongoose");

function connectDB()
{
    mogoose.connect("mongodb+srv://Meet_Hirpara_:bouV0ABkb6QHUTIf@cluster0.obsonj8.mongodb.net/COHORT")
    .then(() =>
    {
        console.log("Connected to DB");
    })
}

module.exports = connectDB;