const express = require("express");
const app = express();
const db = require("db");

app.get("/", async (req, res) => {
  res.send("Welcome to backend!!!");
});
app.listen(8000, () => {
  console.log("port running on 8000");
});
