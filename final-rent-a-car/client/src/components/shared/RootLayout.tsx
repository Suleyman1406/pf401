import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";

import { getCurrentUserAsync } from "@/store/features/userSlice";
import { useAppDispatch } from "@/hooks/redux";
import { Dialogs } from "./dialogs";

const RootLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurrentUserAsync());
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Dialogs />
    </div>
  );
};

export default RootLayout;
