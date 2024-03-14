const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Run Express");
});

app.listen(port, () => {
  console.log("Port running at 3000");
});
