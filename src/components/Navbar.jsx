import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [modal, setModal] = useState(false);
  return (
    <header className="z-10 py-4 bg-white shadow-md">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-orange-500">
        <ul className="flex items-center w-fit ml-auto space-x-6">
          <li className="relative">
            <button
              onClick={() => setModal(!modal)}
              className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
            >
              <FaUserCircle size={32} />
            </button>
          </li>
        </ul>
      </div>
      {modal && (
        <div className="absolute bg-white border border-gray-300 right-7 top-14 py-2 w-48 px-3 rounded-lg flex flex-col gap-2 shadow-xl">
          <Link className="flex items-center gap-3 cursor-pointer">
            <FaRegUser />
            <p>Profile</p>
          </Link>
          <Link className="flex items-center gap-3 cursor-pointer">
            <RiLogoutBoxLine />
            <p>Log Out</p>
          </Link>
        </div>
      )}
    </header>
  );
}
