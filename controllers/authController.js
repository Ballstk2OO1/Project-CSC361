const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user_schema");
const { registerValidation, loginValidation } = require("../validation")
// const jwt = require("../jwt");

exports.register = async (req, res) => {

    // Validate infomation
    const { error } = registerValidation(req.body);
    if (error) {
        return res.status(200).json({ result: "Fail", message: error.details[0].message});
    }

    // Checking if user is already in database
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
        return res.status(200).json({ result: "Fail", message: "Email already exist" });
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
        res.json({ result: "OK", message: "success registeration" })
    } catch (err) {
        res.status(500).send(err);
    }

};

exports.login = async (req, res) => {

    // Validate infomation
    const { error } = loginValidation(req.body);
    
    if (error) {
        return res.status(200).json({ result: "Fail", message: error.details[0].message})
    }
    
    // Checking if the email exist
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(200).json({ result: "Fail", message: "Email doesn't exist"})
    }
    

    // Password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (validPass) {
        
        // Create and assign a token
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
        res.status(200).header("authtoken", token).json({ result: "OK", message: "success sign in"});
        
    } else {
        return res.status(200).json({ result: "Fail", message: "Email and Password doesn't match"});
    }
    
};