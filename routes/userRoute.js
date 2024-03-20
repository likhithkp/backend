const express = require("express");
const Router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const localStrategy = require("passport-local");
passport.use(new localStrategy(User.authenticate()));
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

Router.get("/get", getUser);
Router.get("/get/:id", getUserById);
Router.post("/post", postUser);
Router.put("/update/:id", updateUser);
Router.delete("/delete/:id", deleteUser);

module.exports = Router;
