const express = require("express");
const app = express();
const { PORT } = require("./config");
const apiRoutes = require("./routes");
app.get("/test", (req, res) => {
  res.json({
    msg: "Test ok",
  });
});
app.use("/api", apiRoutes);
app.listen(PORT, () => {
  console.log(` This is running on Port: ${PORT}`);
});
