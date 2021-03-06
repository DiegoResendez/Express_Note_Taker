const router = require("express").Router();

var path = require("path");

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/htmlPages/notes.html"));
});

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/htmlPages/index.html"));
});

module.exports = router;