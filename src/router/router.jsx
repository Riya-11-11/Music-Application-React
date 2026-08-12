import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Favourites from "../pages/Favourite";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ArtistDashboard from "../pages/ArtistDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true, // "/" route pe home show hoga
        element: <Home />,
      },
      {
        path: "favourite",
        element: <Favourites />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "artistdashboard",
        element: <ArtistDashboard />,
      },
    ],
  },
]);

export default router;