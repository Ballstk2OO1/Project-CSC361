const mongoose = require("mongoose");

const user_schema = mongoose.Schema ({
    username: {
        type: String,
        require: true,
        min: 4,
        max: 255
    },
    email: {
        type: String,
        require: true,
        min: 4,
        max: 255
    },
    password: {
        type: String,
        require: true,
        min: 8,
        max: 255
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("user", user_schema)