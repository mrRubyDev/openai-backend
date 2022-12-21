const express = require("express");
const { generateTweet } = require("../controllers/openai.controller.js");
const router = express.Router();

router.post("/twitter", generateTweet);

module.exports = router;
