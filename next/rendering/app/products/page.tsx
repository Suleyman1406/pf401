import { Navigation } from "@/components/navigation";
import React, { Suspense } from "react";

const ProductsPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
      </Suspense>
      Products
    </div>
  );
};

export default ProductsPage;
