const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/signin', async (req, res) => {
    try{
        const { email, password } = req.body;
    
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'User not exist.' });
        }

        if(user.password !== password){
            return res.status(401).json({ message: 'password is wrong.' })
        }

        const userData = {
            id: user._id,
            email: user.email,
            role: user.role
        };

        res.cookie('EthSkillVerifyData', userData, {
            httpOnly: false,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: 24 * 60 * 60 * 1000
        });
        res.status(200).json({ message: 'Login successful!' });
    }
    catch (err) {
        console.log("------");
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;