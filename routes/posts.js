const router = require("express").Router();

router.get("/", (req, res) => {
    res.json({
        posts: {
            title: "first post",
            description: "random data you shouldn't"
        }
    })
});

module.exports = router;