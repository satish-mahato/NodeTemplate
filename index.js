const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

app.get("/test", (req, res) => {
  res.json({
    msg: "Test ok",
  });
});
app.listen(PORT, () => {
  console.log(` This is running on Port: ${PORT}`);
});
