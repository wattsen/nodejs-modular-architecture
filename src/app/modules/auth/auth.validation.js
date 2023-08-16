const { z } = require("zod");

const loginZodSchema = z.object({
  body: z.object({
    email: z.string({ required_error: "Email is required!" }),
    password: z.string({ required_error: "Password is required!" }),
  }),
});

exports.AuthValidation = {
  loginZodSchema,
};
