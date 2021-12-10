const { Router } = require("express");
const List = require("../models/specList_schema")

exports.findMySpec = async (req, res) => {
    try {
        const mySpec = await List.find({ username: req.body.username })
        res.json({ result: "OK", message: "success get all data", data: mySpec })
    } catch {
        res.status(500);
    }
}