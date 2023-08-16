const jwt = require("jsonwebtoken");

const generateToken = (payload, secret, expireTime) => {
  const accessToken = jwt.sign(payload, secret, { expiresIn: expireTime });

  return accessToken;
};

const verifyToken = (token, secret) => {
  const verifiedJwt = jwt.verify(token, secret);

  return verifiedJwt;
};

module.exports.JwtHelper = {
  generateToken,
  verifyToken,
};
