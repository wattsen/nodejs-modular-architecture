const express = require("express");
const { AuthController } = require("./auth.controller");
const { AuthValidation } = require("./auth.validation");
const validateRequest = require("../../middleware/validateRequest");
const router = express.Router();

router
  .route("/login")
  .post(validateRequest(AuthValidation.loginZodSchema), AuthController.login);

module.exports.AuthRoute = router;
