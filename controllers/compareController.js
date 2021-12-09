const { Router } = require("express");
// import model to get data from Database
const MAINBOARD = require("../models/mainboard_schema")
const CPU = require("../models/cpu_schema")
const GPU = require("../models/gpu_schema")
const STORAGE = require("../models/storage_schema")
const MEMORY = require("../models/memory_schema")
const COOLER = require("../models/cooler_schema")
const PSU = require("../models/psu_schema")
const CASE = require("../models/case_schema")

exports.getAllData = async (req, res) => {
    try {
        const c_mainboard = await MAINBOARD.find({}, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
            }
        })
        
        const c_cpu = await CPU.find({}, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
            }
        })

        const c_gpu = await GPU.find({}, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
            }
        })
        
        const c_storage = await STORAGE.find({}, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
            }
        })
        
        const c_memory = await MEMORY.find({}, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
            }
        })
        
        const c_cooler = await COOLER.find({}, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
            }
        })
        
        const c_psu = await PSU.find({}, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
            }
        })
        
        const c_case = await CASE.find({}, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
            }
        })
        
        const res_data = {
            mainboard: c_mainboard,
            cpu: c_cpu,
            gpu: c_gpu,
            cooler: c_cooler,
            memory: c_memory,
            storage: c_storage,
            psu: c_psu,
            case: c_case
        }

        res.json({ result: "OK", message: "success get all data", data: res_data })
    } catch {
        res.status(500);
    }
}