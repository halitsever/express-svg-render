const express = require("express");
const axios = require("axios");
var router = express.Router();
var randomWordTemplate = require("../svgTemplates/randomWordTemplate");
router.get("/", async (req, res) => {
  var response = await axios.get("https://random-word-api.herokuapp.com/all");

  res.setHeader("Content-Type", "image/svg+xml");
  res.set("Cache-Control", "public, max-age=1");
  res.send(randomWordTemplate(response.data));
});

module.exports = router;
