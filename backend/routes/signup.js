const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/signup', async (req, res) => {
    try{
        const { fullname, email, mobile, role, password } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({
        fullname,
        email,
        mobile,
        role,
        password,
        });

        await user.save();
        res.status(201).json({ msg: 'User registered successfully' });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
