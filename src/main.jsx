import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./router/router.jsx";
import AuthContext from "./context/AuthContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <AuthContext>
    <RouterProvider router={router} />
    <ToastContainer position="top-right" autoClose={3000} />
  </AuthContext>,
);
