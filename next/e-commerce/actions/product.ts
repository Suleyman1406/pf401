"use server";

import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

// export async function createProduct(data: Prisma.ProductCreateInput) {
//   const { price, name, description, inStock } = data;
//   const product = await prisma.product.create({
//     data: {
//       description,
//       name,
//       price,
//       inStock,
//     },
//   });

//   revalidatePath("/");

//   return product;
// }
export async function createProduct(formData: FormData) {
  const newProduct = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    price: Number(formData.get("price")),
    inStock: formData.get("inStock") === "on" ? true : false,
  };

  const product = await prisma.product.create({
    data: newProduct,
  });

  revalidatePath("/");
  return product;
}
export async function updateProduct(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = Number(formData.get("price"));
  const inStock = formData.get("inStock") === "on" ? true : (false as boolean);

  const updatedProduct: Prisma.ProductUpdateInput = {};
  if (name) updatedProduct["name"] = name;
  if (description) updatedProduct["description"] = description;
  if (price) updatedProduct["price"] = price;
  if (inStock) updatedProduct["inStock"] = inStock;

  const product = await prisma.product.update({
    where: {
      id: formData.get("id") as string,
    },
    data: updatedProduct,
  });

  revalidatePath("/");
  return product;
}

export async function deleteProduct(id: string) {
  const product = await prisma.product.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
  return product;
}
