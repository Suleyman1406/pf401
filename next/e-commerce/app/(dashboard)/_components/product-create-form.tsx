"use client";

import { createProduct, updateProduct } from "@/actions/product";
import { useState } from "react";

export const ProductCreateForm = () => {
  const [loading, setLoading] = useState(false);

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const result = await createProduct({
  //     name,
  //     description,
  //     price: Number(price),
  //     inStock,
  //   });
  //   console.log(result);
  // };

  return (
    <form action={updateProduct} className="px-6">
      <input
        value="cm0i03ygj0008n0pwprnf0fx8"
        type="text"
        name="id"
        id="id"
        className="hidden"
      />
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          name="description"
          id="description"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Price
        </label>
        <input
          type="number"
          name="price"
          id="price"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4 max-w-40 flex items-center">
        <label htmlFor="inStock" className=" text-sm font-medium text-gray-700">
          In Stock
        </label>
        <input
          type="checkbox"
          name="inStock"
          id="inStock"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <button
          disabled={loading}
          type="submit"
          className="bg-purple-700 text-white p-2 rounded-md disabled:opacity-20"
        >
          Create
        </button>
      </div>
    </form>
  );
};
