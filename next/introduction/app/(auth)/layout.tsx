import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Auth",
  description: "Authentication Desc",
};

const AuthenticationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      Authentication LAyout:
      {children}
    </div>
  );
};

export default AuthenticationLayout;
