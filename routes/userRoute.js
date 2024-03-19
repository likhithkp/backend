const express = require("express");
const Router = express.Router();
const {
  getUser,
  getUserById,
  postUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");

Router.get("/", (req, res) => {
  res.render("index");
});

Router.get("/login", (req, res) => {
  req.flash("Name", "Likhith");
  res.send("Set flash");
});

Router.get("/check", (req, res) => {
  console.log(req.flash("Name"));
  res.render("index", { Error: req.flash("Name") });
});

Router.get("/get", getUser);
Router.get("/get/:id", getUserById);
Router.post("/post", postUser);
Router.put("/update/:id", updateUser);
Router.delete("/delete/:id", deleteUser);

module.exports = Router;
