const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const catFacts = require("./src/routes/catFact");
const tasks = require("./src/routes/task");

mongoose.connect(process.env.MONGODB_URL);

app.use("/catFacts", catFacts);
app.use("/", tasks);

app.listen(port);
