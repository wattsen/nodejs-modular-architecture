const User = require("./user.model");
const { isUserFound } = require("./user.util");

const getAllUsers = async () => {
  const users = await User.find();

  return users;
};

const getUserById = async (id) => {
  const user = await User.findById(id);

  return user;
};

const updateUser = async (_id, payload) => {
  if (!(await isUserFound(_id))) {
    throw new Error("");
  }

  const user = await User.findOneAndUpdate({ _id }, payload);

  return user;
};

const createUser = async (payload) => {
  const user = await User.create(payload);

  return user;
};

const deleteUser = async (id) => {
  if (!(await isUserFound(id))) {
    throw new Error("");
  }

  const user = await User.findByIdAndDelete(id);

  return user;
};

exports.UserService = {
  getAllUsers,
  getUserById,
  updateUser,
  createUser,
  deleteUser,
};
