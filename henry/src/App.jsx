import "./App.css";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import { FilterArray, Increment } from "./screens";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "filter",
    element: <FilterArray />,
  },
  {
    path: "increment",
    element: <Increment />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
