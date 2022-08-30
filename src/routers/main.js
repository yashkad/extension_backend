const express = require("express");
const router = express.Router();
const { parse } = require("rss-to-json");
const { links } = require("../rss_feed_data");

router.get("/", async (req, res) => {
  const data = await parse(links[2]);

  res.send(data);
});

module.exports = router;
