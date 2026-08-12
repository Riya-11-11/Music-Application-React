import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./router/router.jsx";
import AuthContext from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContext>
    <RouterProvider router={router} />
  </AuthContext>,
);
