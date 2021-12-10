const mongoose = require("mongoose");

const specList_schema = mongoose.Schema ({
    title: String,
    userID: String,
    spec: {
        CPU: String,
        GPU: String,
        MAINBOARD: String,
        MEMORY: String,
        STORAGE: String,
        POWERSUPPLY: String,
        COOLER: String,
        CASE: String
    }
});

module.exports = mongoose.model("speclist", specList_schema)