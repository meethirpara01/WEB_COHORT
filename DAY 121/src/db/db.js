const mongoose = require("mongoose");

// Server Database Se Kese Connect Hoga Ye Tum db.js File Me Likhoge..

function connectToDB()
{
    mongoose.connect("mongodb+srv://Meet_Hirpara_:bouV0ABkb6QHUTIf@cluster0.obsonj8.mongodb.net/COHORT")
    .then(() => {
        console.log("Connected To DB");
    })
}

module.exports = connectToDB;