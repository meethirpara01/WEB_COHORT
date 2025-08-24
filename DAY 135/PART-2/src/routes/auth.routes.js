const express = require('express');
const userModel = require('../model/user.model');
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post('/register', async (req, res) =>
{
    const {username, password} = req.body;

    const isuser = await userModel.findOne({
        username: username
    });

    if (isuser)
    {
        return res.status(409).json({
            message: "USERNAME IS ALREDY TAKEN!"
        });
    }

    const user = await userModel.create({
        username, password
    });

    const token = jwt.sign({
        id: user._id
    }, process.env.SECRATE_KEY);

    res.cookie('token', token);

    res.status(201).json({
        message: "USER REGISTERED SUCCESSFULLY",
        user
    });
});

router.get('/user', async (req, res) =>
{
    const token = req.cookies.token;

    if(!token)
    {
        return res.status(401).json({
            message:"UNATHORIZED TOKEN NOT FOUND!"
        })
    }

    
    try
    {
        const decoded = jwt.verify(token, process.env.SECRATE_KEY);

        const user = await userModel.findOne({
            _id: decoded.id
        });

        res.status(201).json({
            message: "USER DATA FATCH SUCCESSFULLY",
            user
        });

    }catch(err)
    {
        res.status(401).json({
            message: "UNATHORIZED TOKEN NOT FOUND!"
        });

    }
});


router.post('/login', async (req, res) =>
{
    const {username, password} = req.body;

    const user = await userModel.findOne({username});

    if(!user)
    {
        return  res.status(404).json({
            message: "USER ACCOUNT NOT FOUND!"
        });
    }

    const ispassword = await userModel.findOne({password});

    if(!ispassword)
    {
        return res.status(404).json({
            message: "INVALID PASSWORD!"
        });
    }

    const token = jwt.sign({
        id: user._id
    }, process.env.SECRATE_KEY);

    res.cookie("token", token);

    res.status(201).json({
        message: "USER LOGIN SUCCESSFULLY",
        user
    });
});

router.get('/logout', (req, res) =>
{
    res.clearCookie("token");

    res.status(200).json({
        message: "USER LOGGED OUT SUCCESSFULLY"
    })
})

module.exports = router;