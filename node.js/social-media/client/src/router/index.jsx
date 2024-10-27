import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "../constants/paths";
import HomePage from "@/pages/home";
import RootLayout from "@/layouts/root";
import { Suspense, lazy } from "react";
import LoginPage from "@/pages/login";
// import SavedPostsPage from "@/pages/saved-posts";
const SavedPostsPage = lazy(() => import("@/pages/saved-posts"));

export const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: PATHS.LOGIN,
        element: <LoginPage />,
      },
      {
        path: PATHS.SAVED,
        element: (
          <Suspense fallback={<div>loading....</div>}>
            <SavedPostsPage />
          </Suspense>
        ),
      },
    ],
  },
]);
