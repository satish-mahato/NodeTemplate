const express = require("express");
const app = express();
const { ServerConfig, LoggerConfig } = require("./config");
const apiRoutes = require("./routes");
app.get("/test", (req, res) => {
  res.json({
    msg: "Test ok",
  });
});
app.use("/api", apiRoutes);
app.listen(ServerConfig.PORT, () => {
  console.log(` This is running on Port: ${ServerConfig.PORT}`);
  LoggerConfig.info("Successfully started  the Server", {});
});
