import { products } from "@/_data/products";
import { createUniqueId } from "@/utils/helpers";
import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const searchQuery = searchParams.get("query");

  if (searchQuery) {
    const filteredProducts = products.filter(
      (p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return Response.json(filteredProducts);
  }

  return Response.json(products);
}

export async function POST(request: NextRequest) {
  const product = await request.json();

  if (!product.name || !product.price || !product.description)
    return new Response("Validation Error", {
      status: 400,
      statusText: "Error",
    });
  product.id = createUniqueId();
  products.push(product);

  return Response.json(product);
}
