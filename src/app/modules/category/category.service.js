const Category = require("./category.model");

const getAllCategories = async () => {
  const categories = Category.find();

  return categories;
};

const getCategoryById = async (id) => {
  const category = Category.findById(id);

  return category;
};

const createCategory = async (payload) => {
  const category = await Category.create(payload);

  return category;
};

const updateCategory = async (_id, payload) => {
  const category = await Category.findOneAndUpdate({ _id }, payload);

  return category;
};

const deleteCategory = async (id) => {
  const category = await Category.findByIdAndDelete(id);

  return category;
};

exports.CategoryService = {
  getAllCategories,
  getCategoryById,
  updateCategory,
  createCategory,
  deleteCategory,
};
