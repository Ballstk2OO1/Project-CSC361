const { Router } = require("express");
const jwt = require("jsonwebtoken");
const List = require("../models/specList_schema")

exports.addSpecList = async (req, res) => {
    const { token } = req.body
    const userID = jwt.verify(token, process.env.TOKEN_SECRET)

    const spec = new List({
        title: req.body.title,
        userID: userID,
        spec: {
            CPU: req.body.spec.cpu,
            GPU: req.body.spec.gpu,
            MAINBOARD: req.body.spec.mainboard,
            MEMORY: req.body.spec.memory,
            STORAGE: req.body.spec.storage,
            POWERSUPPLY: req.body.spec.psu,
            COOLER: req.body.spec.cooler,
            CASE: req.body.spec.case
        }
    });

    try {
        const savedSpec = await spec.save();
        res.json({ result: "OK", message: "create spec success" })
    } catch (err) {
        res.status(500).send(err); 
    }
}
