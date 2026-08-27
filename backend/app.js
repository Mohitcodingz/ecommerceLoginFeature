const express = require('express');
const app = express();
// const env = require('dotenv');
const cors = require('cors');
const profileRouter = require('../backend/userLogin/profileRouter')
app.use(cors());
app.use('/profile', profileRouter);
// env.config();
app.use(express.json());
app.use(profileRouter);
module.exports = app;