const express = require("express");

const { UserRoute } = require("../modules/user/user.route");
const { AuthRoute } = require("../modules/auth/auth.route");
const { PostRoute } = require("../modules/post/post.route");
const { CategoryRoute } = require("../modules/category/category.route");
const router = express.Router();

console.log("route;", UserRoute.route);

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoute,
  },
  {
    path: "/users",
    route: UserRoute,
  },
  {
    path: "/posts",
    route: PostRoute,
  },
  {
    path: "/categories",
    route: CategoryRoute,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

exports.applicationRoutes = router;
