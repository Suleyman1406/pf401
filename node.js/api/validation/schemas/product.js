const productListSchema = {
  category: {
    errorMessage: "Category must be a string",
    optional: true,
    isString: true,
    in: ["query"],
  },
  search: {
    errorMessage: "Search must be a string",
    optional: true,
    isString: true,
    in: ["query"],
  },
  sort: {
    errorMessage: "Sort must be a string",
    optional: true,
    isString: true,
    in: ["query"],
  },
  skip: {
    errorMessage: "Skip must be a number",
    optional: true,
    isNumeric: true,
    in: ["query"],
  },
  take: {
    errorMessage: "Take must be a number",
    optional: true,
    isNumeric: true,
    in: ["query"],
  },
};

const productCreateSchema = {
  file: {
    custom: {
      options: (_, { req }) => {
        if (!req.file) {
          throw new Error("Image not uploaded!!");
        }
        return true;
      },
    },
  },
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
    notEmpty: {
      errorMessage: "Description is required",
    },
  },
  price: {
    in: ["body"],
    isNumeric: {
      errorMessage: "Price must be a number",
    },
    notEmpty: {
      errorMessage: "Price is required",
    },
  },
  category: {
    in: ["body"],
    isString: {
      errorMessage: "Category must be a string",
    },
    notEmpty: {
      errorMessage: "Category is required",
    },
    isLength: {
      errorMessage: "Category Id must be a 24 character hex string",
      options: { min: 24, max: 24 },
    },
  },
};
const productEditSchema = {
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
    notEmpty: {
      errorMessage: "Description is required",
    },
  },
  price: {
    in: ["body"],
    isNumeric: {
      errorMessage: "Price must be a number",
    },
    notEmpty: {
      errorMessage: "Price is required",
    },
  },
  category: {
    in: ["body"],
    isString: {
      errorMessage: "Category must be a string",
    },
    notEmpty: {
      errorMessage: "Category is required",
    },
    isLength: {
      errorMessage: "Category Id must be a 24 character hex string",
      options: { min: 24, max: 24 },
    },
  },
};

module.exports = {
  productListSchema,
  productCreateSchema,
  productEditSchema,
};
