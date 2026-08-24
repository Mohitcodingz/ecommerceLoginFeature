//  we write the middleware and the create the server here
const app = require('./app');
const connectDB = require('./userLogin/db.js')
require('dotenv').config()
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    connectDB()
    console.log(`The server is running on local host http://localhost:${PORT}`)

})

