const categorySchema = {
  title: {
    in: ["body"],
    isString: {
      errorMessage: "Title must be a string",
    },
    notEmpty: {
      errorMessage: "Title is required",
    },
  },
  description: {
    in: ["body"],
    isString: {
      errorMessage: "Description must be a string",
    },
    optional: true,
  },
};
module.exports = {
  categorySchema,
};
