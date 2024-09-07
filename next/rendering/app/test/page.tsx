import { cookies, headers } from "next/headers";

const TestPage = () => {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log("theme", theme);

  return <div>{new Date().toLocaleTimeString()}</div>;
};

export default TestPage;
