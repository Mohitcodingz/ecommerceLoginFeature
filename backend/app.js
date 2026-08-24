const express = require('express');
const app = express();
// const env = require('dotenv');
const cors = require('cors');
app.use(cors());
// env.config();
app.use(express.json());

module.exports = app;