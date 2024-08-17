import { useEffect, useRef, useState } from "react";
import Button from "./components/button";

type Theme = "light" | "dark" | "default";

const App = () => {
  const [count, setCount] = useState<number | null>(null);
  const [theme, setTheme] = useState<Theme>();
  const ref = useRef(null);
  // const data = {
  //   name: 12,
  //   surname: "true",
  // };

  // const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   console.log(e);
  // };

  useEffect(() => {
    const theme = localStorage.getItem("theme") as Theme;
    setTheme(theme);
  }, []);

  return (
    <div>
      <Button
        count={"32"}
        countHistory={["34", "45", "53"]}
        // theme={theme}
        // ref={ref}
        // count={count}
        // setCount={setCount}
        // // onClick={handleClick}
        // variant="primary"
        // label="Save"
        // disabled
        // className="bg-red"
        // setCount={setCount}
        // handleClick={(value: string) => {
        //   console.log("Clicked", value);
        //   return 12;
        // }}
        // style={{
        //   alignItems: "center",
        //   justifyContent: "center",
        // }}
        // data={data}
      />
    </div>
  );
};

export default App;
