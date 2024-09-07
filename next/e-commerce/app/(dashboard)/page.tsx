import prisma from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { ProductCreateForm } from "./_components/product-create-form";

export default async function Home() {
  const products = await prisma.product.findMany({
    where: {
      // inStock: true,
      // price: {
      //   gte: 800,
      // },
      name: {
        // not: {
        //   contains: "C",
        // },
        // contains: "product",
        // startsWith: "",
        // in: ["techonolgy", "fashion"],
      },
    },
    orderBy: {
      // price: "desc",
      // createdAt: "asc",
    },
    select: {
      id: true,
      name: true,
      description: true,
      price: true,
    },
    // take: 1,
    // skip: 1,
  });

  const productCount = await prisma.product.count({
    where: {
      name: {
        // not: {
        //   contains: "C",
        // },
      },
    },
  });

  return (
    <main className="max-w-screen-xl mx-auto py-6">
      <h1 className="text-purple-700 font-bold text-4xl">Products</h1>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope font-bold text-4xl text-black mb-8 max-lg:text-center">
            Product list({productCount})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500"
              >
                <div className="">
                  <Image
                    width={300}
                    height={300}
                    src={"https://pagedone.io/asset/uploads/1700726174.png"}
                    alt={product.name}
                    className="w-full aspect-square rounded-2xl"
                  />
                </div>
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProductCreateForm />
    </main>
  );
}
