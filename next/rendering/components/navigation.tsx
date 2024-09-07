import { cookies } from "next/headers";

export const Navigation = async () => {
  await new Promise((res) =>
    setTimeout(() => {
      res("resolved");
    }, 10000)
  );
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log("theme", theme);
  return <div>Navigation</div>;
};
