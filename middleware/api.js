const express = require("express");
const router = express.Router();

require("../db")

router.use("/auth", require("../routes/auth"));
router.use("/create", require("../routes/create"));
router.use("/compare", require("../routes/compare"));
router.use("/profile", require("../routes/profile"));
router.use("/insert", require("../routes/insert"));

module.exports = router;