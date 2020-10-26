const bcrypt = require('bcryptjs');
const db = require('../models');
const jwt = require('jsonwebtoken');


// ANCHOR register route
const register = async (req, res) => {
    try {
        const foundUser = await db.User.findOne({email: req.body.email});

        if (foundUser) return res.send({message: "Account is already registered"});

        const salt = await bcrypt.genSalt(10);
        // takes each character and turns it into multiple random characters
        const hash = await bcrypt.hash(req.body.password, salt);
        req.body.password = hash;
        // create user with req.body and hashed password
        const createdUser = await db.User.create({ ...req.body, password: hash });

        return res.status(201).json({ status: 201, message: "success", createdUser });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Something went wrong. Please try again."
        })
    }
} 


module.exports = {
    register,
    
}