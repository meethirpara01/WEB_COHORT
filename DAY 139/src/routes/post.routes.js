const express = require("express");
const jwt = require('jsonwebtoken');
const userModel = require('../model/user.model');
const router = express.Router();


router.post('/', async (req, res) =>
{
    const token = req.cookies.token;

    if(!token)
    {
        return res.status(401).json({
            message: "UNAUTHORIZRED TOKEN, PLEASE LOGIN FIRST!"
        });
    }

    try
    {
        const decoded = jwt.verify(token, process.env.SECRATE_KEY);

        const user = await userModel.findOne({
            _id: decoded.id
        });

        req.user = user;
    }
    catch (error)
    {
        return res.status(401).json({
            message: "INVALID TOKEN, PLEASE LOGIN AGAIN!"
        });
    }
});
module.exports = router;