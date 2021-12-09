const mongoose = require("mongoose");

const storage_schema = mongoose.Schema ({
    title: String,
    image: String,
    category: String,
    price: String,
    brand: String,
    model: String,
    specification: {
        specification: {
            capacity: String,
            interface: String,
            read_speed: String,
            write_speed: String,
            technology: String
        }
    }
});

module.exports = mongoose.model("STORAGE", storage_schema)