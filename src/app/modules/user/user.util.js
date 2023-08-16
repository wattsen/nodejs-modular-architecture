const User = require("./user.model");

module.exports.isUserFound = async (id) => {
  const user = await User.findById(id);

  return user;
};
