require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const app = express();
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const logger = require("logger");
const passport = require("passport");
const localStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
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
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(Router.serializeUser());
passport.deserializeUser(Router.deserializeUser());
app.use(logger("dev"));
app.use(flash());
app.use(cookieParser());
app.use("/", Router);

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Connected to Mongo");
});

app.listen(3000);
