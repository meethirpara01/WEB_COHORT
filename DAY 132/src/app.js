const express = require('express');
const indexRoutes = require('./routes/index.routes');

const app = express();
app.use(express.json());

app.use((req, res, next) =>
{
    console.log("This Middeleware Is Between App And Router");
    next();
});

app.use('/', indexRoutes);


module.exports = app;
