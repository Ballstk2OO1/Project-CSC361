const mongoose = require("mongoose");

const mainboard_schema = mongoose.Schema ({
    title: String,
    image: String,
    category: String,
    price: String,
    brand: String,
    chipset: String,
    model: String,
    support: String,
    specification: {
        support_detail: {
            CPU_socket: String,
            memory_slot: String,
            memory_max: String,
            memory_support: String
        },
        onboard_chipset: {
            onboard_graphic: String,
            audio_chipset: String,
            audio_channel: String,
            LAN_chipset: String,
            LAN_speed: String
        },
        expansion_slots: {
            PCI_slot: String,
            multi_GPU_support: String
        },
        storage: {
            SATA_slot: String,
            M2_slot: String,
            M2_supports_type: String
        },
        backpanel_port: {
            USB_port: String,
            HDMI_port: String,
            display_port: String,
            audio_port: String,
            PS2_port: String
        },
        other_detail: {
            form_factor: String,
            power_pin: String,
            dimension: String
        }
    }
});

module.exports = mongoose.model("mainboard", mainboard_schema)