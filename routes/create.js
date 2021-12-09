const express = require("express");
const router = express.Router();
const createController = require("../controllers/createController");

router.post("/add_spec", createController.addSpecList)

module.exports = router