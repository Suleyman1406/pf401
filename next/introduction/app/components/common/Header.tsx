"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();
  // const router = useRouter();

  // const handleSave = () => {
  //   router.replace("/products");
  // };

  return (
    <div className="w-full p-6 bg-blue-300 flex gap-3">
      <Link
        href="/"
        className={pathname === "/" ? "text-white" : "text-purple-500"}
      >
        Home
      </Link>
      <Link
        href="/login"
        className={pathname === "/login" ? "text-white" : "text-purple-500"}
      >
        Login
      </Link>

      <Link
        replace
        href="/register"
        className={pathname === "/register" ? "text-white" : "text-purple-500"}
      >
        Register
      </Link>
      <Link
        href="/products"
        className={pathname === "/products" ? "text-white" : "text-purple-500"}
      >
        Products
      </Link>
      {/* <button onClick={handleSave}>Save</button> */}
    </div>
  );
};

export default Header;
