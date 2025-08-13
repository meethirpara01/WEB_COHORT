const express = require('express');


const router = express();

router.use((req, res, next) =>
{
    console.log("This Middeleware Is Between Router And API");
    next();
});

router.get('/', (req, res) =>
{
    res.json({
        message: "Welcome To The Meet's Server's Api"
    })
});


module.exports = router;
