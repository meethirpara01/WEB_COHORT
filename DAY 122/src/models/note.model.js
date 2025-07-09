const mogoose = require("mongoose");

const noteSchema = new mogoose.Schema({
    title:String,
    content:String
});

const noteModel = mogoose.model("note", noteSchema);    // "note" IS AN COLLECTION OF DATA

module.exports = noteModel;