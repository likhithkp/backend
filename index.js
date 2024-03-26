const express = require("express");
const app = express();
const Router =  require("./src/routes/userRoute");
 
app.use("/", Router)

app.listen(3000);