const express = require("express");
const app = express();
const port = 3000;

const catFacts = require("./src/routes/catFact");
const tasks = require("./src/routes/task");

app.use("/catFacts", catFacts);
app.use("/", tasks);

app.listen(port);
