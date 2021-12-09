const mongoose = require("mongoose");

const cpu_schema = mongoose.Schema ({
    title: String,
    image: String,
    category: String,
    price: String,
    brand: String,
    series: String,
    model: String,
    specification: {
        specification: {
            socket: String,
            core: String,
            thread: String,
            base_clock: String,
            boost_clock: String,
            L2cache: String,
            L3cache: String,
            technology: String,
            TDP: String
        }
    }
});

module.exports = mongoose.model("cpu", cpu_schema)