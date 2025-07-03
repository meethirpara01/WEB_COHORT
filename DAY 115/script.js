// INSRO TO BACKEND
// NODE JS

// const catMe = require("cat-me");
// console.log(catMe());

// console.log("Hello Word");


const http = require('http');

const server = http.createServer((req, res) =>
{
    res.end("Hello from Node.js server!");
})

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
