// "use client";
// import { useRouter } from "next/navigation";
import React from "react";

type Product = {
  name: string;
};

const ProductsPage = async () => {
  const products: Product[] = await new Promise((res) => {
    setTimeout(() => {
      res([{ name: "Computer" }, { name: "Mouse" }, { name: "Keyboard" }]);
    }, 4000);
  });
  // const router = useRouter();

  // const handleGoBack = () => {
  //   router.back();
  // };

  return (
    <div className="flex flex-col gap-3">
      {products.map((p, idx) => (
        <li key={idx}>{p.name}</li>
      ))}
      {/* <button onClick={handleGoBack}>Back Button</button> */}
    </div>
  );
};

export default ProductsPage;
