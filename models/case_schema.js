const mongoose = require("mongoose");

const case_schema = mongoose.Schema ({
    title: String,
    image: String,
    category: String,
    price: String,
    brand: String,
    model: String,
    specification: {
        specification: {
            form_factor: String,
            mainboard_support: String,
            material: String,
            color: String,
            weight: String,
            dimension: String,
            IO_port: String
        },
        cooling_support: {
            fan_support: String,
            radiator_support: String,
            max_CPU_COOLER_height: String,
            max_GPU_lenght: String
        }
    }
});

module.exports = mongoose.model("CASE", case_schema)