const { StatusCodes } = require("http-status-codes");
const info = (req, res) => {
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "Info APi is Live",
    error: {},
    data: {},
  });
};
module.exports = {
  info,
};
