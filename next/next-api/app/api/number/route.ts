export const dynamic = "force-static";

export async function GET() {
  const response = await fetch(
    "https://www.randomnumberapi.com/api/v1.0/random",
    {
      next: {
        revalidate: 10,
      },
    }
  );
  const data = await response.json();

  return Response.json(data);
}
