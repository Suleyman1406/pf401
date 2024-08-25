import React from "react";

const BlogPage = ({ params }: { params: { slugs: string[] } }) => {
  const { slugs } = params;

  return <div>Blog {JSON.stringify(slugs)}</div>;
};

export default BlogPage;
