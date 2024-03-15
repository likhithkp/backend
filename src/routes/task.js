require("dotenv").config();
const express = require("express");
const router = express.Router();
const TodoModel = require("../../db/mongo/schema");

router.get("/todos", async (req, res) => {
  try {
    await TodoModel.find((err, val) => {
      if (err) {
        console.error(err);
      } else {
        res.json(val);
      }
    });
  } catch (error) {
    console.log(error);
  }
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
