const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

router.get("/MySpec", profileController.findMySpec)

module.exports = router