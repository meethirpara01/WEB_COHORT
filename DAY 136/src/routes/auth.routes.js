const express = require('express');
const router = express.Router();
const userModel = require('../model/user.model');
const jwt = require('jsonwebtoken');

// POST /REGISTER
// POST /LOGIN
// GET /USER [PROTECTED] // IF USER NOT LOGIN THAN CAN'T ACCESS THIS API

router.post('/register', async (req, res) =>
{
    const {username, password} = req.body;

    const isuser = await userModel.findOne({
        username
    });

    if (isuser) 
    {
        return res.status(409).json({
            message: "USERNAME IS ALREDY TAKEN!"
        })
    }

    const user = await userModel.create({
        username, password
    });

    const token = jwt.sign({
        id:user._id
    }, process.env.JWT_SECRATE_KEY);

    res.cookie("token", token);

    res.status(201).json({
        message: "USER CREATED SUCCESSFULLY",
        user
    })
})
module.exports = router;