import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import React, { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <h1 className="mb-1 text-black text-2xl font-bold ">Welcome!</h1>
      <p className="max-w-[400px] text-sm text-muted-foreground text-center mb-4">
        This is the authentication layout. You can use this layout to provide
        authentication pages to your users.
      </p>
      <ClerkLoaded>{children}</ClerkLoaded>
      <ClerkLoading>
        <Loader2 size={24} className="animate-spin" />
      </ClerkLoading>
    </div>
  );
};

export default AuthLayout;
