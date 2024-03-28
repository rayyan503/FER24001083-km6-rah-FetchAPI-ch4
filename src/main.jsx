import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./Home";
import DataHero from "./DataHero";
import SearchHero from "./SearchHero";
import DetailHero from "./DetailHero";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/hero",
    element: <DataHero />,
  },
  {
    path: "/search",
    element: <SearchHero />,
  },
  {
    path: "/search/detail",
    element: <DetailHero />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
