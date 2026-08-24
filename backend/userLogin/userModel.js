const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    'name': String,
    'email': String,
    'password': String
})
const userModel = mongoose.model('userCollection', schema);
module.exports = userModel;