import { products } from "@/_data/products";
import { createUniqueId } from "@/utils/helpers";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  if (2 > 1) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const searchParams = request.nextUrl.searchParams;
  const searchQuery = searchParams.get("query");

  // console.log("header", request.headers.get("authorization"));
  const authorizationToken = headers().get("authorization");
  console.log("authorizationToken", authorizationToken);

  if (searchQuery) {
    const filteredProducts = products.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
