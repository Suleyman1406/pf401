export const postCreateSchema = {
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
  content: {
    in: ["body"],
    isString: true,
    isLength: {
      errorMessage: "Content should be at least 6 character long",
      options: { min: 6 },
    },
  },
  tags: {
    in: ["body"],
    isString: true,
    optional: true,
  },
};

export const postEditSchema = {
  content: {
    in: ["body"],
    isString: true,
    isLength: {
      errorMessage: "Content should be at least 6 character long",
      options: { min: 6 },
    },
  },
  tags: {
    in: ["body"],
    isString: true,
    optional: true,
  },
};

export const postCommentSchema = {
  content: {
    in: ["body"],
    isString: true,
    isLength: {
      errorMessage: "Content should be at least 2 character long",
      options: { min: 2 },
    },
  },
};
