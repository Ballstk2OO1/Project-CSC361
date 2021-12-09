const { Router } = require("express");

const MAINBOARD = require("../models/mainboard_schema")
const CPU = require("../models/cpu_schema")
const GPU = require("../models/gpu_schema")
const STORAGE = require("../models/storage_schema")
const MEMORY = require("../models/memory_schema")
const COOLER = require("../models/cooler_schema")
const PSU = require("../models/psu_schema")
const CASE = require("../models/case_schema")

exports.mainboard = async (req, res) => {
    console.log(req.body)
    const data = new MAINBOARD({
        title: req.body.title,
        image: req.body.image,
        category: req.body.category,
        price: req.body.price,
        brand: req.body.brand,
        chipset: req.body.chipset,
        model: req.body.model,
        support: req.body.support,
        specification: {
            support_detail: {
                CPU_socket: req.body.specification.support_detail.CPU_socket,
                memory_slot: req.body.specification.support_detail.memory_slot,
                memory_max: req.body.specification.support_detail.memory_max,
                memory_support: req.body.specification.support_detail.memory_support
            },
            onboard_chipset: {
                onboard_graphic: req.body.specification.onboard_chipset.onboard_graphic,
                audio_chipset: req.body.specification.onboard_chipset.audio_chipset,
                audio_channel: req.body.specification.onboard_chipset.audio_channel,
                LAN_chipset: req.body.specification.onboard_chipset.LAN_chipset,
                LAN_speed: req.body.specification.onboard_chipset.LAN_speed
            },
            expansion_slot: {
                PCI_slot: req.body.specification.expansion_slot.PCI_slot,
                multi_GPU_support: req.body.specification.expansion_slot.multi_GPU_support
            },
            storage: {
                SATA_slot: req.body.specification.storage.SATA_slot,
                M2_slot: req.body.specification.storage.M2_slot,
                M2_support_type: req.body.specification.storage.M2_support_type
            },
            back_panel_port: {
                USB_port: req.body.specification.back_panel_port.USB_port,
                HDMI_port: req.body.specification.back_panel_port.HDMI_port,
                display_port: req.body.specification.back_panel_port.display_port,
                audio_port: req.body.specification.back_panel_port.audio_port,
                PS2_port: req.body.specification.back_panel_port.PS2_port
            },
            other_detail: {
                form_factor: req.body.specification.other_detail.form_factor,
                power_pin: req.body.specification.other_detail.power_pin,
                dimension: req.body.specification.other_detail.dimension
            }
        }
    });

    try {
        const savedData = await data.save();
        res.json({ result: "OK", message: "success" })
    } catch (err) {
        res.status(500).send(err); 
    }
}

exports.cpu = async (req, res) => {
    const data = new CPU({
        title: req.body.title,
        image: req.body.image,
        category: req.body.category,
        price: req.body.price,
        brand: req.body.brand,
        series: req.body.series,
        model: req.body.model,
        specification: {
            specification: {
                socket: req.body.specification.specification.socket,
                core: req.body.specification.specification.core,
                thread: req.body.specification.specification.thread,
                base_clock: req.body.specification.specification.base_clock,
                boost_clock: req.body.specification.specification.boost_clock,
                L2cache: req.body.specification.specification.L2cache,
                L3cache: req.body.specification.specification.L3cache,
                technology: req.body.specification.specification.technology,
                TDP: req.body.specification.specification.TDP
            }
        }
    });

    try {
        const savedData = await data.save();
        res.json({ result: "OK", message: "success" })
    } catch (err) {
        res.status(500).send(err); 
    }
}

exports.gpu = async (req, res) => {
    const data = new GPU({
        title: req.body.title,
        image: req.body.image,
        category: req.body.category,
        price: req.body.price,
        brand: req.body.brand,
        series: req.body.series,
        model: req.body.model,
        specification: {
            chipset: {
                GPU_chipset: req.body.specification.chipset.GPU_chipset,
                GPU_name: req.body.specification.chipset.GPU_name,
                GPU_clock: req.body.specification.chipset.GPU_clock,
                shader_unit: req.body.specification.chipset.shader_unit,
                technology: req.body.specification.chipset.technology
            },
            memory: {
                memory_clock: req.body.specification.memory.memory_clock,
                memory_size: req.body.specification.memory.memory_size,
                memory_interface: req.body.specification.memory.memory_interface,
                memory_type: req.body.specification.memory.memory_type
            },
            graphic_feature: {
                bus_interface: req.body.specification.graphic_feature.bus_interface,
                multi_GPU_support: req.body.specification.graphic_feature.multi_GPU_support,
                directx: req.body.specification.graphic_feature.directx,
                shader_model: req.body.specification.graphic_feature.shader_model
            },
            port_connector: {
                HDMI_port: req.body.specification.port_connector.HDMI_port,
                display_port: req.body.specification.port_connector.display_port
            },
            chipset: {
                power_connector: req.body.specification.chipset.power_connector,
                power_requirement: req.body.specification.chipset.power_requirement
            }
        }
    });

    try {
        const savedData = await data.save();
        res.json({ result: "OK", message: "success" })
    } catch (err) {
        res.status(500).send(err); 
    }
}

exports.memory = async (req, res) => {
    const data = new MEMORY({
        title: req.body.title,
        image: req.body.image,
        category: req.body.category,
        price: req.body.price,
        brand: req.body.brand,
        model: req.body.model,
        specification: {
            specification: {
                memory_type: req.body.specification.specification.memory_type,
                memory_size: req.body.specification.specification.memory_size,
                memory_speed: req.body.specification.specification.memory_speed,
                latency: req.body.specification.specification.latency,
                voltage: req.body.specification.specification.voltage
            }
        }
    });

    try {
        const savedData = await data.save();
        res.json({ result: "OK", message: "success" })
    } catch (err) {
        res.status(500).send(err); 
    }
}

exports.storage = async (req, res) => {
    const data = new STORAGE({
        title: req.body.title,
        image: req.body.image,
        category: req.body.category,
        price: req.body.price,
        brand: req.body.brand,
        model: req.body.model,
        specification: {
            specification: {
                capacity: req.body.specification.specification.capacity,
                interface: req.body.specification.specification.interface,
                read_speed: req.body.specification.specification.read_speed,
                write_speed: req.body.specification.specification.write_speed,
                technology: req.body.specification.specification.technology
            }
        }
    });

    try {
        const savedData = await data.save();
        res.json({ result: "OK", message: "success" })
    } catch (err) {
        res.status(500).send(err); 
    }
}

exports.cooler = async (req, res) => {
    const data = new COOLER({
        title: req.body.title,
        username: req.body.username,
        spec: {
            CPU: req.body.spec.cpu,
            GPU: req.body.spec.gpu,
            MAINBOARD: req.body.spec.mainboard,
            MEMORY: req.body.spec.memory,
            STORAGE: req.body.spec.storage,
            PSU: req.body.spec.psu,
            COOLER: req.body.spec.cooler,
            CASE: req.body.spec.case
        }
    });

    try {
        const savedData = await data.save();
        res.json({ result: "OK", message: "success" })
    } catch (err) {
        res.status(500).send(err); 
    }
}

exports.psu = async (req, res) => {
    const data = new PSU({
        title: req.body.title,
        image: req.body.image,
        category: req.body.category,
        price: req.body.price,
        brand: req.body.brand,
        series: req.body.series,
        model: req.body.model,
        specification: {
            specification: {
                form_factor: req.body.specification.specification.form_factor,
                socket_support: req.body.specification.specification.socket_support,
                radiator_dimension: req.body.specification.specification.radiator_dimension,
                radiator_material: req.body.specification.specification.radiator_material,
                fan_built_in: req.body.specification.specification.fan_built_in
            }
        }
    });

    try {
        const savedData = await data.save();
        res.json({ result: "OK", message: "success" })
    } catch (err) {
        res.status(500).send(err); 
    }
}

exports.case = async (req, res) => {
    const data = new CASE({
        title: req.body.title,
        image: req.body.image,
        category: req.body.category,
        price: req.body.price,
        brand: req.body.brand,
        model: req.body.model,
        specification: {
            specification: {
                form_factor: req.body.specification.specification.form_factor,
                mainboard_support: req.body.specification.specification.mainboard_support,
                material: req.body.specification.specification.material,
                color: req.body.specification.specification.color,
                weight: req.body.specification.specification.weight,
                dimension: req.body.specification.specification.dimension,
                IO_port: req.body.specification.specification.IO_port
            },
            cooling_support: {
                fan_support: req.body.specification.cooling_support.fan_support,
                radiator_support: req.body.specification.cooling_support.radiator_support,
                max_CPU_COOLER_height: req.body.specification.cooling_support.max_CPU_COOLER_height,
                max_GPU_lenght: req.body.specification.cooling_support.max_GPU_lenght
            }
        }
    });

    try {
        const savedData = await data.save();
        res.json({ result: "OK", message: "success" })
    } catch (err) {
        res.status(500).send(err); 
    }
}