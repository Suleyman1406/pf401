import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const routes = [
  {
    label: "Dashboard",
    href: "/",
  },
  {
    label: "Product Create",
    href: "/product/create",
  },
];

export const Header = async () => {
  const user = await currentUser();
  return (
    <div className="w-full bg-gradient-to-b from-purple-500 to-purple-300 px-3 py-4 lg:px-6 lg:py-8 flex items-center justify-between">
      <div className="flex items-center lg:gap-x-32">
        <Image src="/assets/logo.svg" alt="Logo" width={80} height={30} />
        <div className="flex items-center gap-x-3">
          {routes.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-white hover:bg-white/20 p-2 rounded-md transition"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-white mr-2 text-sm font-bold">
          Welcome, {user?.firstName ?? ""}
        </p>
        <UserButton />
      </div>
    </div>
  );
};
