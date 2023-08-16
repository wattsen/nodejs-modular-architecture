const httpStatus = require("http-status-codes");

const { config } = require("../../config");
const { JwtHelper } = require("../../helpers/jwtHelper");

const auth =
  (...requiredRoles) =>
  async (req, res, next) => {
    const token = req.headers.authorization;

    try {
      if (!token) {
        throw new Error(httpStatus.BAD_REQUEST, "Unauthorization Access!");
      }

      // Access Token Verificaiton
      const user = JwtHelper.verifyToken(token, config.JWT_SECRET);

      // Role Authorization
      if (requiredRoles.length && !requiredRoles.includes(user.role)) {
        throw new Error(`Unauthorization Access! ${httpStatus.UNAUTHORIZED}`);
      }
      req.user = user;

      next();
    } catch (err) {
      next(err);
    }
  };

module.exports = auth;
