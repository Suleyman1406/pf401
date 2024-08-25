import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const ProductReviews = ({ params }: Props) => {
  const { id } = params;
  return <div>{`Product ${id} reviews`}</div>;
};

export default ProductReviews;
