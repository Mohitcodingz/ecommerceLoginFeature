require('dotenv').config();
const mongoose = require('mongoose')

const connectDB = async function () {
    try {
        await mongoose.connect(process.env.MongoDb_URI)
        console.log('Connected the Database Successfully');
    }
    catch (error){
console.log('Connection Failed with ',error)
    }
}
module.exports = connectDB