require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("OK - Cool and Good!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("App is listening on port: ", PORT);
});
