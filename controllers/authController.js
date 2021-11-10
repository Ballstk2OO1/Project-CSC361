const bcrypt = require('bcryptjs');
const { Router } = require("express");
const User = require("../models/user_schema");
const { registerValidation, loginValidation } = require("../validation")
// const jwt = require("../jwt");

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

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create new user
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
    });

    try {
        const savedUser = await user.save();
        res.send({ user: user._id });
    } catch (err) {
        res.status(400).send(err);
    }

};

exports.login = async (req, res) => {

    // Validate infomation
    const { error } = loginValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    // Checking if the email exist
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send("Email doesn't exist.");
    }

    // Password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) {
        return res.status(400).send("Email and Password doesn't match.");
    }

    res.send("Login Success")
};