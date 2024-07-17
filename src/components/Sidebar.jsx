import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi2";
import { LuClipboardList } from "react-icons/lu";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { LuClock } from "react-icons/lu";

export default function SideBar() {
  return (
    <aside className="z-20 hidden w-64 overflow-y-auto bg-white md:block flex-shrink-0">
      <div className="py-4 text-gray-500">
        <a href="#" className="ml-6 text-lg font-bold text-gray-800 block">
          <img
            src="https://msib6.sigarda.com/assets/img/logo.png"
            alt=""
            className="w-44"
          />
        </a>
        <ul className="mt-6">
          <li className="relative px-6 py-3">
            <Link
              to={"/admin"}
              className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
            >
              <BiHome size={20} />
              <span className="ml-4">Dashboard</span>
            </Link>
          </li>
          <li className="relative px-6 py-3">
            <Link
              to={"/admin/user"}
              className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
            >
              <HiOutlineUsers size={20} />
              <span className="ml-4">User</span>
            </Link>
          </li>
          <li className="relative px-6 py-3">
            <Link
              to={"/admin/project"}
              className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
            >
              <LuClipboardList size={20} />
              <span className="ml-4">Project</span>
            </Link>
          </li>
          <li className="relative px-6 py-3">
            <Link
              to={"/admin/meeting"}
              className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
            >
              <FaHeadphonesSimple size={20} />
              <span className="ml-4">Meeting</span>
            </Link>
          </li>
          <li className="relative px-6 py-3">
            <Link className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800">
              <IoMailUnreadOutline size={20} />
              <span className="ml-4">Notification</span>
            </Link>
          </li>
          <li className="relative px-6 py-3">
            <Link className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800">
              <SlLocationPin size={20} />
              <span className="ml-4">Location</span>
            </Link>
          </li>
          <li className="relative px-6 py-3">
            <Link className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800">
              <MdOutlineCalendarMonth size={20} />
              <span className="ml-4">Schedule</span>
            </Link>
          </li>
          <li className="relative px-6 py-3">
            <Link className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800">
              <MdOutlineCalendarMonth size={20} />
              <span className="ml-4">Schedule User</span>
            </Link>
          </li>
          <li className="relative px-6 py-3">
            <Link className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800">
              <GrUserExpert size={20} />
              <span className="ml-4">Presence</span>
            </Link>
          </li>
          <li className="relative px-6 py-3">
            <Link className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800">
              <LuClock size={20} />
              <span className="ml-4">Shift</span>
            </Link>
          </li>
          <li className="relative px-6 py-3">
            <Link className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800">
              <LuClock size={20} />
              <span className="ml-4">Shift</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
