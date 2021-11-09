const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
    // .connect("mongodb://127.0.0.1:27017/project361")
    .connect(process.env.DB_CONNECT)
    .then(() => console.log("DB Connected!"));

mongoose.connection.on("connected", () => {
    console.log("Mongoose default connection open");
});

mongoose.connection.on("error", (err) => {
    console.log("Mongoose default connection error: " + err);
});

mongoose.connection.on("disconnected", () => {
    console.log("Mongoose default connection disconnected");
});

process.on("SIGINT", () => {
    mongoose.connection.close( () => {
        console.log("Mongoose default connection disconnected through app termination");
        process.exit(0);
    });
});
