const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", require("./middleware/api"));

app.listen(8080,() => {
    console.log("server running port 8080")
})