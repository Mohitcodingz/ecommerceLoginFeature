const express = require('express');
const authMiddleware = require('./authMiddleware');
const router = express.Router();
router.get('/profile', authMiddleware, (req, res) => {
res.json('You are authenticated')
})
module.exports = router;