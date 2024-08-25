import React from "react";

type Props = {
  params: {
    id: string;
    reviewId: string;
  };
};

const ProductReviewDetail = ({ params }: Props) => {
  const { id, reviewId } = params;

  return <div>{`Product ${id} Review ${reviewId}`}</div>;
};

export default ProductReviewDetail;
