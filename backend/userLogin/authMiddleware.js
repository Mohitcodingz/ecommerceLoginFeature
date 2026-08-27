const jwt = require('jsonwebtoken');
const env = require('dotenv').config();
// This is our own custom middelware to check if 
async function authMiddleware(req, res, next) {
    try {

        // we need to access the mongodb;
        const token = req.headers['authorization'].split(' ')[1];
        jwt.verify(token, process.env.secret_key);
        next()
    }
    catch (error) {
        res.status(401).json('the token is not valid')
    }

}