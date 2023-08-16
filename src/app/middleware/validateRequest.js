const validateRequest = (zodSchema) => async (req, res, next) => {
  try {
    await zodSchema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
      cookies: req.cookies,
    });
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateRequest;
