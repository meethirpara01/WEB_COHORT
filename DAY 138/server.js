const app = require('./src/app');
const connectTODB = require('./src/db/db');

connectTODB();

app.listen(3000, () =>
{
    console.log("SERVER RUNING ON PORT 3000!");
});

