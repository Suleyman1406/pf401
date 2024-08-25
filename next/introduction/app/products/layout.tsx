import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Products",
  },
};
const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      ProductsLayout
      {children}
    </div>
  );
};

export default ProductsLayout;
