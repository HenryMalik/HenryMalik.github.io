import "./App.css";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import {
  HomePage,
  FilterArray,
  Increment,
  LuasSegitiga,
  LuasPersegi,
  LuasLingkaran,
  BelajarUseEffect,
} from "./screens";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "filter",
    element: <FilterArray />,
  },
  {
    path: "increment",
    element: <Increment />,
  },
  {
    path: "segitiga",
    element: <LuasSegitiga />,
  },
  {
    path: "persegi",
    element: <LuasPersegi />,
  },
  {
    path: "lingkaran",
    element: <LuasLingkaran />,
  },
  {
    path: "belajar-use-effect",
    element: <BelajarUseEffect />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
