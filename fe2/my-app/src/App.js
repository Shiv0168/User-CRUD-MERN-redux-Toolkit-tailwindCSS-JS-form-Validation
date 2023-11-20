import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUserPage from "./pages/AddUserPage";
import HomePage from "./pages/HomePage1";
import EditUserPage from "./pages/EditUserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/add",
    element: <AddUserPage />,
  },
  {
    path: "/edit/:_id",
    element: <EditUserPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
