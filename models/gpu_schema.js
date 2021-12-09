const mongoose = require("mongoose");

const gpu_schema = mongoose.Schema ({
    title: String,
    image: String,
    category: String,
    price: String,
    brand: String,
    series: String,
    model: String,
    specification: {
        chipset: {
            GPU_chipset: String,
            GPU_name: String,
            GPU_clock: String,
            shader_unit: String,
            technology: String
        },
        memory: {
            memory_clock: String,
            memory_size: String,
            memory_interface: String,
            memory_type: String
        },
        graphic_feature: {
            bus_interface: String,
            multi_GPU_support: String,
            directx: String,
            shader_model: String
        },
        port_connector: {
            HDMI_port: String,
            display_port: String
        },
        chipset: {
            power_connector: String,
            power_requirement: String
        }
    }
});

module.exports = mongoose.model("GPU", gpu_schema)