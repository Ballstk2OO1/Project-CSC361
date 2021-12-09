const mongoose = require("mongoose");

const memory_schema = mongoose.Schema ({
    title: String,
    image: String,
    category: String,
    price: String,
    brand: String,
    model: String,
    specification: {
        specification: {
            memory_type: String,
            memory_size: String,
            memory_speed: String,
            latency: String,
            voltage: String
        }
    }
});

module.exports = mongoose.model("memory", memory_schema)