import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserPage from "./pages/UserPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
import MeetingPage from "./pages/MeetingPage.jsx";
import NotificationPage from "./pages/NotificationPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/admin",
        // element: <Dashboard />,
      },
      {
        path: "/admin/user",
        element: <UserPage />,
      },
      {
        path: "/admin/project",
        element: <ProjectPage />,
      },
      {
        path: "/admin/meeting",
        element: <MeetingPage />,
      },
      {
        path: "/admin/notification",
        element: <NotificationPage />,
      },
      {
        path: "/admin/product",
        // element: <ProductAdmin />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
