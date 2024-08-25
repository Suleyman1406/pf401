import React from "react";

const BlogsPage = async () => {
  const data = await new Promise((res) => setTimeout(() => res("test"), 4000));
  return <div>BlogsPage</div>;
};

export default BlogsPage;
