const mongoose = require("mongoose");

const cooler_schema = mongoose.Schema ({
    title: String,
    image: String,
    category: String,
    price: String,
    brand: String,
    series: String,
    model: String,
    specification: {
        specification: {
            form_factor: String,
            socket_support: String,
            radiator_dimension: String,
            radiator_material: String,
            fan_built_in: String
        }
    }
});

module.exports = mongoose.model("cooler", cooler_schema)