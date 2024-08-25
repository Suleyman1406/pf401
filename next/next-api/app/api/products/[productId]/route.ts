import { products } from "@/_data/products";
import { type NextRequest, NextResponse } from "next/server";

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { productId: string } }
) {
  const { productId } = params;

  const productIdx = products.findIndex((p) => p.id === productId);

  if (productIdx !== -1) {
    const product = products.splice(productIdx, 1)[0];
    return Response.json(product);
  }

  return new NextResponse("Product Not Found!", {
    status: 404,
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  const { productId } = params;

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return new Response("Product Not Found!", {
      status: 404,
    });
  }

  const newProduct = await request.json();

  if (!newProduct.name || !newProduct.price || !newProduct.description)
    return new Response("Validation Error", {
      status: 400,
      statusText: "Error",
    });

  // ["name", "price", "description"].forEach(
  //   (key) => (product[key] = newProduct[key])
  // );
  product.name = newProduct.name;
  product.price = newProduct.price;
  product.description = newProduct.description;

  return Response.json(product);
}
