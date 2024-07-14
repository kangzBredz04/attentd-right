import { useState } from "react";
import {
  FaAngleDoubleRight,
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleLeft,
} from "react-icons/fa";

const users = [
  {
    id: 1,
    name: "Wahyu",
    role: "Super Admin",
    email: "wahyu@gmail.com",
  },
  {
    id: 2,
    name: "Super Admin",
    role: "Super Admin",
    email: "superadmin@gmail.com",
  },
  {
    id: 3,
    name: "Jhon Doe",
    role: "Admin",
    email: "jhondoe@gmail.com",
  },
  {
    id: 4,
    name: "Client",
    role: "Client",
    email: "client@gmail.com",
  },
  {
    id: 5,
    name: "Who",
    role: "Client",
    email: "who@gmail.com",
  },
];

export default function UserPage() {
  const [keyword, setKeyword] = useState("");
  const filter = users.filter(
    (user) =>
      user.email.toLowerCase().includes(keyword) ||
      user.name.toLowerCase().includes(keyword) ||
      user.role.toLowerCase().includes(keyword)
  );
  return (
    <main className="h-full overflow-y-auto">
      <div className="container grid px-6 mx-auto">
        <div className="my-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-700">Tabel Users</h2>
          <button className="add-button px-4 py-2 text-sm font-medium text-white transition-colors duration-150 bg-orange-500 border border-transparent rounded-lg active:bg-orange-500 hover:bg-orange-600 focus:outline-none focus:shadow-outline-purple">
            Add User
          </button>
        </div>
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto bg-white p-4">
            <div className="dt-container dt-empty-footer">
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <select name="" id="" className="p-1 ">
                    <option value="10">10</option>
                    <option value="10">25</option>
                    <option value="10">50</option>
                    <option value="10">100</option>
                  </select>
                  <label htmlFor="">entries per page</label>
                </div>
                <div className="dt-layout-cell dt-end">
                  <label htmlFor="">Search:</label>
                  <input
                    type="text"
                    onChange={(e) => setKeyword(e.target.value)}
                    className="border-[1px] border-black rounded-[3px] p-1 bg-transparent text-inherit ml-[3px]"
                  />
                </div>
              </div>
              <div className="block clear-both mt-5">
                <div className="p-1">
                  <table className="w-full whitespace-no-wrap">
                    <colgroup>
                      <col className="w-[67.8229px]" />
                      <col className="w-[140.198px]" />
                      <col className="w-[140.198px]" />
                      <col className="w-[232.312px]" />
                      <col className="w-[341.469px]" />
                    </colgroup>
                    <thead>
                      <tr className="text-xs font-semibold tracking-wide text-left text-gray-600 uppercase border-b bg-gray-50">
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          ID
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          NAME
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          ROLE
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          EMAIL
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          ACTION
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y text-xs text-gray-600">
                      {filter.map((u, index) => (
                        <tr key={index} className="h-10">
                          <td className="text-center py-[8px] px-[10px]">
                            {index + 1}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            {u.name}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            {u.role}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            {u.email}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            <div className="btn-group flex gap-6 justify-center">
                              <button className="px-4 py-2 inline-block text-sm font-medium text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-purple">
                                Show
                              </button>
                              <button className=" px-4 py-2 inline-block text-sm font-medium text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple">
                                Edit
                              </button>
                              <button className=" px-4 py-2 inline-block text-sm font-medium text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-purple">
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex justify-between mx-10 my-5">
                <div>
                  <p>Showing 1 to 6 of 6 entries</p>
                </div>
                <div className="flex items-center gap-5">
                  <FaAngleDoubleLeft />
                  <FaAngleLeft />
                  <button>1</button>
                  <FaAngleRight />
                  <FaAngleDoubleRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
