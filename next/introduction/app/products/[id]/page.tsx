import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const productName = await new Promise((res) => {
    setTimeout(() => {
      res("Test");
    }, 1000);
  });

  return {
    title: `Product ${productName} Detail`,
  };
}

const ProductDetail = ({ params }: Props) => {
  const { id } = params;

  if (+id > 10) {
    notFound();
  }

  return <div>{`Product ${id} Detail`}</div>;
};

export default ProductDetail;
