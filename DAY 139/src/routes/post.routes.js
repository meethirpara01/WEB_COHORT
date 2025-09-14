const express = require("express");
const jwt = require('jsonwebtoken');
const userModel = require('../model/user.model');
const authMiddleware = require('../middlewares/auth.middleware');
const multer = require("multer");
const router = express.Router();


const upload = multer({ Storage: multer.memoryStorage() })

/* POST /API/POSTS [PROTECTED] {IMAGE-FILE} */
router.post('/', authMiddleware, upload.single("image"), createPostController);
module.exports = router;