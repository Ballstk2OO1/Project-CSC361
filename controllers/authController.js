const bcrypt = require("bcrypt");
const user = require("../user_schema");
const jwt = require("../jwt");

exports.login = async (req, res) => {

    const { username, password} = req.body;
    const doc = await username.findOne({ username });

    if (doc) {
        const isPasswordValid = await bcrypt.compare(password, doc.password)
        if (isPasswordValid) {
            const payload = {
                id: doc._id,
                username: doc.username
            };
            const token = jwt.sigh(payload, "100h");

            res.status(200).json({ result:"OK", message:"Login Success" })
        } else {
            res.json({ result: "notOK", message: "Invalid Password" })
        }
    } else {
        res.json({ result: "notOK", message: "Invalid Username" })
    }

};

exports.register = async (req, res) => {

    try {
        console.log(JSON.stringify(req.body));
        req.body.password = await bcrypt.hash(req.body.password, 8);
        const doc = await user.create(req.body);
        res.json({ result: "OK", datail: doc });
    } catch (err) {
        res.json({ result: "notOK", datail: err });
    }

};