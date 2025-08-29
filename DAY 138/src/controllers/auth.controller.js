const userModel = require('../model/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function registerController(req, res)
{
    const { username, password } = req.body;

    const isuser = await userModel.findOne({
        username: username
    });

    if(isuser)
    {
        return res.status(409).json({
            message: "USERNAME IS REDY TAKN!"
        });
    }

    const user = await userModel.create({
        username, 
        password: await bcrypt.hash(password, 10)
    });

    const token = jwt.sign({
        id: user._id,
    }, process.env.SECRATE_KEY);

    res.cookie("token", token);

    res.status(201).json({
        message: "USER REGISTERED SUCCESSFULLY",
        user
    });
}

async function loginController(req, res)
{
    const { username, password } = req.body;

    const user = await userModel.findOne({
        username
    });

    if(!user)
    {
        return res.status(409).json({
            message: "USERNAME NOT FOUND!"
        });
    }

    const ispassword = await bcrypt.compare(password, user.password);

    if(!ispassword)
    {
        return res.status(409).json({
            message: "INVALID PASSWORD!"
        });
    }

    const token = jwt.sign({
        id: user._id
    }, process.env.SECRATE_KEY);

    res.cookie("token", token);

    res.status(201).json({
        message: "USER LOGIN SUCCESSFULLY!",
        user: {
            username: user.username,
            id: user._id
        }
    });

}

module.exports = {
    registerController,
    loginController
}