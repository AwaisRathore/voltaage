import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "@/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "@/App";
import Entreprises from "./components/Entreprises/Entreprises";
import Particuliers from "./components/Particuliers/Particuliers";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/entreprises",
        element: <Entreprises />,
      },
      {
        path: "/particuliers",
        element: <Particuliers />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
