const express = require("express");
const jwt = require('jsonwebtoken');
const userModel = require('../model/user.model');
const authMiddleware = require('../middlewares/auth.middleware');
const multer = require("multer");
const router = express.Router();


const upload = multer({ Storage: multer.memoryStorage() })

router.post('/', authMiddleware, createPostController);
module.exports = router;