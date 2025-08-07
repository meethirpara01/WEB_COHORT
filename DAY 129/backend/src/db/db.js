const mongoose = require('mongoose');

function connectToDB()
{
    mongoose.connect(process.env.MONGODB_URL)
        .then(() =>
        {
            console.log("Connected To DB");
        })
        .catch((error) =>
        {
            console.error("Error Connecting To MongoDB: ", error);    
        })
}

module.exports = connectToDB;