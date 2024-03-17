require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(express.static("./public"));
app.set("view engine", "ejs");

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Connected to Mongo");
});

const Router = require("./routes/userRoute");
app.use("/", Router);

app.listen(3000);
