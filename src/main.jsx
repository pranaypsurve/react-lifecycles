import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home.jsx";
import About from "./screens/About.jsx";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        loader: () => "home loader",
        element: <Home />,
        errorElement: (e) => "error" + e,
      },
      {
        path: "about",
        loader: () => "about loader",
        element: <About color="orange" />,
      },
      {
        path: "about/:id",
        element: <About />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Profiler
      onRender={(
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime
      ) => {
        console.log(
          id,
          phase,
          actualDuration,
          baseDuration,
          startTime,
          commitTime
        );
      }}
    >
      <RouterProvider router={router} />
    </Profiler>{" "}
  </React.StrictMode>
);
