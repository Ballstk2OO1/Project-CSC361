// const bcrypt = require('bcrypt');
const User = require("../models/user_schema");
const { registerValidation } = require("../validation")
// const jwt = require("../jwt");

exports.login = async (req, res) => {

};

exports.register = async (req, res) => {

    // Validate infomation
    const { error } = registerValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    // Checking if user is already in database
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
        return res.status(400).send("Email already exist.");
    }

    // Create new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }

};