const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://catfact.ninja/facts");
    res.send(response.data.data.slice(0, 5));
    res.sendStatus(200);
    return;
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
