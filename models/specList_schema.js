const mongoose = require("mongoose");

const specList_schema = mongoose.Schema ({
    title: String,
    username: String,
    spec: {
        CPU: String,
        GPU: String,
        MAINBOARD: String,
        MEMORY: String,
        STORAGE: String,
        PSU: String,
        COOLER: String,
        CASE: String
    }
});

module.exports = mongoose.model("speclist", specList_schema)