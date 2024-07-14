import { Outlet } from "react-router-dom";
import SideBar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-white text-black">
      <SideBar />
      <div className="flex flex-col flex-1 w-full">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
