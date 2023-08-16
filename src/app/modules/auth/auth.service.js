const { StatusCodes } = require("http-status-codes");

const ApiError = require("../../../exceptions/ApiError");
const { config } = require("../../../config");

const { JwtHelper } = require("../../../helpers/jwtHelper");
const User = require("../user/user.model");

const login = async (payload) => {
  const { email, password } = payload;

  const userExists = await User.isUserExist(email);
  if (!userExists) {
    throw new ApiError(StatusCodes.NOT_FOUND, "No user found");
  }

  const { _id, role } = userExists;

  const isPasswordMatches = await User.isPasswordMatch(
    password,
    userExists.password,
  );
  if (!isPasswordMatches) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, "Password does not match");
  }

  // Access Token
  const accessToken = JwtHelper.generateToken(
    { _id, role },
    config.JWT_SECRET,
    config.JWT_SECRET_EXPIRE,
  );

  return { accessToken };
};

module.exports.AuthService = {
  login,
};
