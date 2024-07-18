import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserPage from "./pages/UserPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import MeetingPage from "./pages/MeetingPage.jsx";
import NotificationPage from "./pages/NotificationPage.jsx";
import LocationPage from "./pages/LocationPage.jsx";
import ShiftChangeRequestPage from "./pages/ShiftChangeRequestPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import PresencePage from "./pages/PresencePage.jsx";
import EmployeeShift from "./pages/EmployeeShift.jsx";
import SchedulePage from "./pages/SchedulePage.jsx";
import ShowSchedule from "./pages/ShowSchedule.jsx";
import ScheduleUserPage from "./pages/ScheduleUserPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
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
        path: "/admin/location",
        element: <LocationPage />,
      },
      {
        path: "/admin/scehdule",
        element: <SchedulePage />,
      },
      {
        path: "/admin/detail-schedule",
        element: <ShowSchedule />,
      },
      {
        path: "/admin/scehdule-user",
        element: <ScheduleUserPage />,
      },
      {
        path: "/admin/scehdule-user/detail-schedule",
        element: <ScheduleUserPage />,
      },
      {
        path: "/admin/presence",
        element: <PresencePage />,
      },
      {
        path: "/admin/employee-shift",
        element: <EmployeeShift />,
      },
      {
        path: "/admin/shift-change-request",
        element: <ShiftChangeRequestPage />,
      },
      {
        path: "/admin/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
