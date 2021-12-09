const express = require("express");
const router = express.Router();
const compareController = require("../controllers/compareController");

router.get("/getAllData", compareController.getAllData)

module.exports = router