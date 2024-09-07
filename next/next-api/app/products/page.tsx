"use client";

import { useEffect, useState } from "react";
import { Product } from "../types";

import { Button } from "@/components/ui/button";
import ProductTable from "./_components/Table";
import { CreateProductModal } from "./_components/CreateModal";

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const getData = async () => {
    const data = await fetch("/api/products").then((res) => res.json());
    setProducts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="w-[1268px] max-w-[90%] mx-auto">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-4xl">Products</h1>
          <CreateProductModal />
        </div>
        <ProductTable products={products} />
      </div>
    </div>
  );
};

export default ProductsPage;
