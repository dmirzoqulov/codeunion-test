import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import data from "./data.json";
import MainLayout from "./layouts";

const App = () => {
  const routes = [
    {
      path: "/",
      element: <Home />,
      loader: () => {
        return data;
      },
    },
  ];

  return (
    <MainLayout>
      <RouterProvider router={createBrowserRouter(routes)} />
    </MainLayout>
  );
};

export default App;
