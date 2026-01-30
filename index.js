require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(process.env.PORT, () => {
  console.log("App is listening on port: ", process.env.PORT);
});
