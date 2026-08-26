const express = require("express");
const router = express.Router();

const message = [
    { text: "Hi there!", user: "Amando", added: new Date() },
    { text: "Hello World!", user: "Charles", added: new Date() },
];

router.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", (req, res) => {
    res.render("form", { title: "New Message" });
});

router.post("/new", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;