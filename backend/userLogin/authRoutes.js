// write the logic for the login and the sign up 
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userData = require('./../userModel');
const router = express.Router();
router.post('/register', async (req, res) => {
    try {
        const existingUser = await userData.findOne({ email: req.body.email });
        if (existingUser) {
            return res.json("the user is already registered");
        }
        const hashedPassword = bcrypt.hashSync(req.body.password, 8);
        const newData = new userData({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        })
        await newData.save()
        res.status(201).json('The user is regsitered Successfully')
    }
    catch (error) {
        res.status(500).json('Internal server error')
        console.error('the error occured in the registered route', error)
    }
})

router.post('/login', async (req, res) => {
    const isUserRegistered = await userData.findOne({ email: req.body.email });
    if (!isUserRegistered) {
        return res.json('You need to register first');
    }
    const checkPassword = bcrypt.compareSync(req.body.password, isUserRegistered.password);
    if (!checkPassword) {
        return res.status(201).json('The Password Does not match, Try Again!')
    }

    const secret_key = 'super-secret-key-ecommerceLogin-Feature';
    const payLoad = {
        id: isUserRegistered._id,
    }
    const token = jwt.sign(payLoad, secret_key);
    res.status(200).json({msg:'The user is Logged In Successfully', token:token})
})
