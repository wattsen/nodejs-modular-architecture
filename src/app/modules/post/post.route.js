const express = require("express");

const { userRoles } = require("../user/user.enum");
const auth = require("../../middleware/auth");
const { PostController } = require("./post.controller");

const router = express.Router();

router
  .route("/")
  .get(auth(userRoles.Client), PostController.getAllPost)
  .post(auth(userRoles.Client), PostController.createPost);

router
  .route("/:id")
  .get(PostController.getPostById)
  .patch(PostController.updatePost)
  .delete(PostController.deletePost);

exports.PostRoute = router;
