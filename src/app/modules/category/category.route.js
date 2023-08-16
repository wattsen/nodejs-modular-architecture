const express = require("express");

const auth = require("../../middleware/auth");
const { userRoles } = require("../user/user.enum");
const { CategoryController } = require("./category.controller");
const { PostController } = require("../post/post.controller");

const router = express.Router();

router
  .route("/")
  .get(auth(userRoles.Client), CategoryController.getAllCategories)
  .post(auth(userRoles.Client), CategoryController.createCategory);

router
  .route("/:id")
  .get(CategoryController.getCategoryById)
  .patch(CategoryController.updateCategory)
  .delete(CategoryController.deleteCategory);

router
  .route("/:id/posts")
  .get(auth(userRoles.Client), PostController.getPostsByCategory);

exports.CategoryRoute = router;
