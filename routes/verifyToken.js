const jwt = require("jsonwebtoken");

function auth (req, res, next) {
    const token = req.heafer("auth-token");
    if (!token) {
        return res.status(401).send("Access denied")
    }

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
    } catch {
        res.status(400).send("Invalid token")
    }
};