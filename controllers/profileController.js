const { Router } = require("express");
const jwt = require("jsonwebtoken");
const List = require("../models/specList_schema")

// req username --> userID like createController
exports.findMySpec = async (req, res) => {
    const { token } = req.body
    const userID = jwt.verify(token, process.env.TOKEN_SECRET)

    try {
        const mySpec = await List.find({ userID: userID })
        res.json({ result: "OK", message: "success get all data", data: mySpec })
    } catch {
        res.status(500);
    }
}