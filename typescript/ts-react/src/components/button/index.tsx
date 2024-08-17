import React, {
  ComponentProps,
  ComponentPropsWithoutRef,
  ReactNode,
  useEffect,
} from "react";
import { type User } from "../../types";

// type Color = "red" | "yellow" | "purple" | "green" | "pink";

// type Props = {
// color: Color;
// children: ReactNode;
// type?: "submit" | "reset" | "button";
// style?: React.CSSProperties;
// data: {
//   [key: string]: number;
// };
// data: Record<string, number | boolean>;
// handleClick: (val: string) => number;
// setCount: React.Dispatch<React.SetStateAction<string>>
// };

// type TColor = string;

// interface IProps {
//   children: ReactNode
// }

// const actions = ["Stop", "Continue", "Pause"] as const;

// type Props = ComponentProps<"button"> & {
//   label: string;
//   variant: "warning" | "primary" | "secondary" | "icon";
//   count: number | null;
//   setCount: React.Dispatch<React.SetStateAction<number | null>>;
//   theme: Theme | undefined;
// };

// interface Props extends ComponentProps<"button"> {
//   label: string;
//   variant: "warning" | "primary" | "secondary" | "icon";
// }

// const toArray = <T,>(item: T): T[] => {
//   return [item];
// };

// toArray(5);
// toArray("20");

// function nese(item: unknown){
//   item.toLowerCase();
// }

type Props<T> = {
  count: T;
  countHistory: T[];
};

const Button = <T,>({ count, countHistory }: Props<T>) => {
  console.log(count, countHistory);

  return <button></button>;
};

export default Button;
