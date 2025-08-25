const mongoose = require('mongoose');

function connectToDB() 
{
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Connect To DB");
    })
    .catch(error =>
    {
        console.log(error);
    });
};

module.exports = connectToDB;