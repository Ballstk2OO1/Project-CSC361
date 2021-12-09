const { Router } = require("express");
const List = require("../models/specList_schema")

exports.addSpecList = async (req, res) => {
    const spec = new List({
        title: req.body.title,
        username: req.body.username,
        spec: {
            CPU: req.body.spec.cpu,
            GPU: req.body.spec.gpu,
            MAINBOARD: req.body.spec.mainboard,
            MEMORY: req.body.spec.memory,
            STORAGE: req.body.spec.storage,
            PSU: req.body.spec.psu,
            COOLER: req.body.spec.cooler,
            CASE: req.body.spec.case
        }
    });

    try {
        const savedSpec = await spec.save();
        res.json({ result: "OK", message: "success" })
    } catch (err) {
        res.status(500).send(err); 
    }
}
