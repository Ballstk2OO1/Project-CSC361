const express = require("express");
const router = express.Router();
const insertData = require("../controllers/insertData");

router.post("/cpu", insertData.cpu)
router.post("/gpu", insertData.gpu)
router.post("/mainboard", insertData.mainboard)
router.post("/memory", insertData.memory)
router.post("/storage", insertData.storage)
router.post("/cooler", insertData.cooler)
router.post("/powersupply", insertData.psu)
router.post("/case", insertData.case)

module.exports = router