const express = require('express');
const v = require('./routes/auth.routes');


const app = express();

app.use('/auth', authRoutes);


module.exports = app;