"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const ProductCard = ({
  className,
  test,
}: {
  test: boolean;
  className: string;
}) => {
  const { theme } = useTheme();
  console.log("theme", theme);

  return (
    <div
    // className={cn(
    //   "bg-red-100 text-xl",
    //   true && "bg-red-500",
    //   !false && "font-bold"
    // )}
    >
      <Button variant="destructive" className="">
        Save
      </Button>
    </div>
  );
};

export default ProductCard;
