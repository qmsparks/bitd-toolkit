const bcrypt = require('bcryptjs');
const db = require('../models');
const utils = require('../utils');


// ANCHOR register route
const register = async (req, res) => {
    try {
        const foundUser = await db.User.findOne({email: req.body.email});

        if (foundUser) return res.send({message: "Account is already registered"});

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        req.body.password = hash;
        const createdUser = await db.User.create({ ...req.body, password: hash });

        return res.status(201).json({ status: 201, message: "success", createdUser });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Something went wrong. Please try again."
        })
    }
} 

// ANCHOR Login Route
const login = async (req, res) => {
    try {
        const foundUser = await db.User.findOne({ email: req.body.email });

        if (!foundUser) {
            return res.send({ message: "Email or Password incorrect" });
        }

        const match = await bcrypt.compare(req.body.password, foundUser.password);

        if(!match) {
            return res.send({message: "Email or password incorrect"});
        } else {

            const signedJwt = await utils.token.send(foundUser._id);

            return res.status(200).json({
                status: 200,
                message: "Success",
                id: foundUser._id,
                signedJwt
            });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            message: "Something went wrong. Please try again."
        })
    }
}

/**
 * Sends a fresh jwt to the client
 * @function extend
 * @param {*} req 
 * @param {*} res 
 */
const extend = async (req, res) => {
    try {
        const signedJwt = await utils.token.send(req.userId);

        return res.status(200).json({
            status: 200,
            message: "Success",
            id: req.userId,
            signedJwt
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            message: "Something went wrong. Please try again."
        })
    }
}


module.exports = {
    register,
    login, 
    extend
}