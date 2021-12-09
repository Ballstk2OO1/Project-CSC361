const mongoose = require("mongoose");

const psu_schema = mongoose.Schema ({
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
            maximun_power: String,
            modular: String,
            fans: String,
            certificate: String,
            input_voltage: String,
            input_frequency: String,
            dimension: String
        },
        port_connector: {
            main_power: String,
            PCIe_connector: String,
            SATA_connector: String
        }
    }
});

module.exports = mongoose.model("powersupply", psu_schema)