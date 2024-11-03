const express = require("express");
const app = express();
const { PORT } = require("./config");
app.get("/test", (req, res) => {
  res.json({
    msg: "Test ok",
  });
});
app.listen(PORT, () => {
  console.log(` This is running on Port: ${PORT}`);
});
