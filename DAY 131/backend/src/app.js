const express = require("express");
const songRouters = require('./routes/song.routes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

/*
    title,
    artist,
    audioFile
*/

app.use('/', songRouters);


module.exports = app;