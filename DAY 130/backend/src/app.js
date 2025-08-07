const express = require("express");
const songRouters = require('./routes/song.routes');


const app = express();
app.use(express.json());

/*
    title,
    artist,
    audioFile
*/

app.use('/', songRouters);


module.exports = app;