const { UserService } = require("./user.service");

const getAllUsers = async (req, res) => {
  const users = await UserService.getAllUsers();

  res.json(users);
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  const user = await UserService.getUserById(id);

  res.json(user);
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const userData = req.body;

  const user = await UserService.updateUser(id, userData);

  res.json(user);
};

const createUser = async (req, res) => {
  const userData = req.body;

  const user = await UserService.createUser(userData);

  res.json(user);
};

const deleteUser = async (req, res) => {
  const id = req.params.id;

  const user = await UserService.deleteUser(id);

  res.json(user);
};

module.exports.UserController = {
  getAllUsers,
  getUserById,
  updateUser,
  createUser,
  deleteUser,
};
