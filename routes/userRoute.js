const express = require("express");
const Router = express.Router();
const {
  getUser,
  getUserById,
  postUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");

Router.get("/", getUser);
Router.get("/:id", getUserById);
Router.post("/post", postUser);
Router.put("/update/:id", updateUser);
Router.delete("/delete/:id", deleteUser);

module.exports = Router;
