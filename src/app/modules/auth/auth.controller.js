const { AuthService } = require("./auth.service");
const sendResponse = require("../../../helpers/sendResponse");
const { StatusCodes } = require("http-status-codes");
const catchAsync = require("../../../helpers/catchAsync");

const login = catchAsync(async (req, res) => {
  const userCredentials = req.body;

  const result = await AuthService.login(userCredentials);

  console.log(result);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "User logged in Successfully!",
    data: result,
  });
});

module.exports.AuthController = {
  login,
};
