import "./App.css";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Compras from "./components/Pages/Compras/Compras";
import Infos from "./components/Pages/Infos/Infos";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/", element: <RouterProvider /> },
      { path: "/lista-compras", element: <Compras /> },
      { path: "/home", element: <Home /> },
      { path: "/produtos", element: <Infos /> },
      { path: "/produtos/ver/:id", element: <Login /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
