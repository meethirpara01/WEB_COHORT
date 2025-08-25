const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{    // SCHEMA LEVEL VALIDATION
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,

    }
});

const userModel = mongoose.model("user", userSchema); 

module.exports = userModel;