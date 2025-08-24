const express = require('express');
const userModel = require('../model/user.model');

const router = express.Router();

router.post('/register', async (req, res) =>
{
    const {username, password} = req.body;

    const isuser = await userModel.findOne({
        username: username
    });

    if (isuser)
    {
        return res.status(401).json({
            message: "USERNAME IS ALREDY TAKEN!"
        });
    }

    const user = await userModel.create({
        username, password
    });

    
})