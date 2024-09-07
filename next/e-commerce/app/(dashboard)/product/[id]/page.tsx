import prisma from "@/lib/db";
import React from "react";

const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
  const product = await prisma.product.findUnique({
    where: {
      id: params.id,
    },
  });
  if (!product) {
    return <div>Product not found</div>;
  }
  // create product detail with tailwind css
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-purple-700 font-bold text-4xl">{product.name}</h1>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* <div className="">
          <img
            width={300}
            height={300}
            src={"https://pagedone.io/asset/uploads/1700726174.png"}
            alt={product.name}
            className="w-full aspect-square rounded-2xl"
          />
        </div> */}
          <div className="mt-5">
            <div className="flex items-center justify-between">
              <h6 className="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-indigo-600">
                {product.name}
              </h6>
              <h6 className="font-semibold text-xl leading-8 text-indigo-600">
                ${product.price}
              </h6>
            </div>
            <p className="mt-2 font-normal text-sm leading-6 text-gray-500">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
