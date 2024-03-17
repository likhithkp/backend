const express = require("express");
const Router = express.Router();
const {
  getUser,
  getUserById,
  postUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");

Router.get("/set", (req, res) => {
  res.cookie("age", 100);
  res.render("index");
});

Router.get("/read", (req, res) => {
  console.log("Cookies>>>>>>>>>", req.cookies.age);
  res.send("check");
});

Router.get("/clear", (req, res) => {
  res.clearCookie("age");
  res.send("Cookie cleared");
});

Router.get("/", getUser);
Router.get("/:id", getUserById);
Router.post("/post", postUser);
Router.put("/update/:id", updateUser);
Router.delete("/delete/:id", deleteUser);

module.exports = Router;
