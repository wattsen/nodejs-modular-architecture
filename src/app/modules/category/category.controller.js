const { CategoryService } = require("./category.service");

const getAllCategories = async (req, res) => {
  const categories = await CategoryService.getAllCategories();

  res.json(categories);
};

const getCategoryById = async (req, res) => {
  const id = req.params.id;
  const category = await CategoryService.getCategoryById(id);

  res.json(category);
};

const updateCategory = async (req, res) => {
  const id = req.params.id;
  const payload = req.body;

  const category = await CategoryService.updateCategory(id, payload);
  res.json(category);
};

const createCategory = async (req, res) => {
  const payload = req.body;

  const category = await CategoryService.createCategory(payload);

  res.json(category);
};

const deleteCategory = async (req, res) => {
  const id = req.params.id;

  const category = await CategoryService.deleteCategory(id);

  res.json(category);
};

module.exports.CategoryController = {
  getAllCategories,
  getCategoryById,
  updateCategory,
  createCategory,
  deleteCategory,
};
