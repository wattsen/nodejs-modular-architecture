const { INTERNAL_SERVER_ERROR } = require("http-status-codes");

const { config } = require("../../config");
const { ZodError } = require("zod");
const handleZodError = require("../../exceptions/handleZodError");

const errorHandler = (err, req, res, next) => {
  let { statusCode, status, message } = err;

  if (config.env === "production" && !err.isOperational) {
    statusCode = INTERNAL_SERVER_ERROR;
    message = INTERNAL_SERVER_ERROR;
  }

  console.log(err instanceof ZodError);

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError.status;
    status = simplifiedError.message;
    message = simplifiedError.errorMessage;
  }

  res.locals.errorMessage = err.message;

  const response = {
    statusCode,
    status,
    message,
    ...(config.env === "development" && { stack: err.stack }),
  };

  res.status(statusCode).send(response);
};

module.exports = {
  errorHandler,
};
