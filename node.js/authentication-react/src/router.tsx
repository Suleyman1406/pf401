import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import AuthGuard from "./components/layouts/auth-guard";
import ProfilePage from "./pages/profile";
import DashboardPage from "./pages/dashboard";

export const router = createBrowserRouter([
  {
    path: "",
    element: <AuthGuard requireAuth={false} />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "",
    element: <AuthGuard />,
    children: [
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "",
    element: <AuthGuard isAdmin />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
    ],
  },
]);
