const express = require("express");
const { generateTweet } = require("../controllers/openai.controller.js");
const router = express.Router();

router.get("/twitter", generateTweet);

module.exports = router;
