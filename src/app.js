const express = require("express");
const cors = require("cors");
const httpStatus = require("http-status-codes");

const { applicationRoutes } = require("./app/routes");
const { errorHandler } = require("./app/middleware/errorHandler");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application Route
app.use("/api/v1/", applicationRoutes);

// Health Check
app.get("/", (req, res) => {
  res.send("Hello World from Management System!");
});

// Not Found API Error
app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found!",
    errorMessages: [{ path: req.originalUrl, message: "API Not Found!" }],
  });
  next();
});

app.use(errorHandler);

module.exports = app;
