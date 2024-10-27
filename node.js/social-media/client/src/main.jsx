import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "./components/providers/theme-provider";
import { router } from "./router";
import { Provider } from "react-redux";

import "./styles/global.css";
import "./styles/index.css";
import { store } from "./store";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  // <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>
  // </ThemeProvider>
);
