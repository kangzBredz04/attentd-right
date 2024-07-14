import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="z-10 py-4 bg-white shadow-md">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-orange-500">
        <ul className="flex items-center w-fit ml-auto space-x-6">
          <li className="relative">
            <button className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none">
              <FaUserCircle size={26} />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
