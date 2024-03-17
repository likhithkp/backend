require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const app = express();
const cookieParser = require("cookie-parser");

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
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Connected to Mongo");
});

const Router = require("./routes/userRoute");
app.use("/", Router);

app.listen(3000);
