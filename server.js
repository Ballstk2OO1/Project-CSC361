const express = require("express");

const app = express();
const cors = require("cors");
const corsOption = {
    exposedHeaders: "authtoken"
}
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/public', express.static(__dirname + '/public'));
app.use("/api", require("./middleware/api"));

app.listen(8080,() => {
    console.log("server running port 8080")
});