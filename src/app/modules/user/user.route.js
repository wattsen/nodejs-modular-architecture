const express = require("express");

const { UserController } = require("./user.controller");
const { userRoles } = require("./user.enum");
const auth = require("../../middleware/auth");
const { WishController } = require("../wish/wish.controller");

const router = express.Router();

router
  .route("/")
  .get(auth(userRoles.Client), UserController.getAllUsers)
  .post(UserController.createUser);

router
  .route("/:id")
  .get(UserController.getUserById)
  .patch(UserController.updateUser)
  .delete(UserController.deleteUser);

// Wishlist
router
  .route("/:id/wishlist")
  .get(WishController.getAllWishes)
  .post(WishController.createWish);

router
  .route("/:id/wishlist/:wishId")
  .get(WishController.getAllWishesByName)
  .patch(WishController.addPostToWish)
  .delete(WishController.deleteWish);

exports.UserRoute = router;
