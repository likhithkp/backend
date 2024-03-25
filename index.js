require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const app = express();
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const Router = require("./src/routes/userRoute");

//View engine setup
app.use(express.json());
app.use(express.static("./public"));
app.set("view engine", "ejs");

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "secretData",
  })
);
app.use(flash());
app.use(cookieParser());
app.use("/", Router);

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Connected to Mongo");
});

app.listen(3000);
