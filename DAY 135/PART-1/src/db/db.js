const mongoose = require('mongoose');
require('dotenv').config();

function connectTODB()
{
    mongoose.connect(process.env.MONGODB_URL)
    .then(() =>
    {
        console.log("Connected to DB");
    })
    .catch(error =>
    {
        console.log(error);
    });
}

module.exports = connectTODB;