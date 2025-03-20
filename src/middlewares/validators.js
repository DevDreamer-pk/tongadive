import Joi from "joi";

// Validation schema for adding multiple products
const addProductsSchema = Joi.array().required().items(
  Joi.object({
    name: Joi.string().min(3).max(50).required(),
    description: Joi.string().max(500).required(),
    category: Joi.string().min(3).max(50).required(),
    price: Joi.number().positive().required()
  })
);

// Middleware to validate request body
export const validateAddProducts = (req, res, next) => {
  const { error } = addProductsSchema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      message: "Validation error",
      errors: error.details.map((err) => err.message),
    });
  }

  next();
};
