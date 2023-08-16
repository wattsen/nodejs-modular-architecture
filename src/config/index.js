const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.join(process.cwd(), ".env"),
});

module.exports.config = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  MONGODB_URI: process.env.MONGODB_URI,
  BCRYPT_SALT_ROUNDS: process.env.BCRYPT_SALT_ROUNDS,
  JWT_SECRET: "s",
  JWT_SECRET_EXPIRE: "24h",
};
