const express = require("express");
const userModel = require('../model/user.model');
const router = express.Router();

router.post('/register', async (req, res) =>
{
    const {username, password} = req.body;

    const user = await userModel.create({
        username, password
    });

    res.status(201).json({
        message: "User Registered Successfully",
        user
    });
});

router.post('/login', async (req, res) =>
{
    const {username, password} = req.body;

    const isUserExist = await userModel.findOne({
        username: username
    });

    if (!isUserExist) {
        return res.status(401).json({
            message: `USER NOT FOUND [ INVALID ${username} USERNAME ]`
        });
    }

    const isPasswordValid = password == isUserExist.password;

    if (!isPasswordValid) {
        return res.status(401).json({
            message: `INVALID ${password} PASSWORD`
        });
    }

    res.status(200).json({
        message:"USE LOGGEDIN SUCCESSEFULLY"
    })
}); 


module.exports = router;