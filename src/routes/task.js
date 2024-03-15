const express = require("express");
const router = express.Router();

router.get("/todo", (req, res) => {
  res.send("todo");
});

router.post("/todoPost", (req, res) => {
  res.send("todoPosted");
});

router.put("/todoPut", (req, res) => {
  res.send("todoPut");
});

router.delete("/todoDelete", (req, res) => {
  res.send("todoDeleted");
});

module.exports = router;
