/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  FaAngleDoubleRight,
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleLeft,
} from "react-icons/fa";

const presenceData = [
  {
    id: 1,
    name: "Tomo",
    attendance_date: "26 June 2024",
    check_in: "09:23:24",
    check_out: "Belum melakukan absen pulang.",
  },
  {
    id: 2,
    name: "Tomo",
    attendance_date: "26 June 2024",
    check_in: "11:23:24",
    check_out: "Belum melakukan absen pulang.",
  },
  {
    id: 3,
    name: "Super Admin",
    attendance_date: "26 June 2024",
    check_in: "15:11:24",
    check_out: "15:13:24",
  },
];

export default function PresencePage() {
  const [keyword, setKeyword] = useState("");
  const [presences, setPresences] = useState(presenceData);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filter = presences.filter(
    (presence) =>
      presence.name.toLowerCase().includes(keyword.toLowerCase()) ||
      presence.attendance_date.toLowerCase().includes(keyword.toLowerCase())
  );

  const handleChangeEntriesPerPage = (e) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filter.length / entriesPerPage);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

  const paginatedPresence = filter.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );
  return (
    <main className="h-full overflow-y-auto bg-gray-50">
      <div className="container grid px-6 mx-auto">
        <div className="my-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            Tabel Presence
          </h2>
        </div>
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto bg-white p-4">
            <div className="dt-container dt-empty-footer">
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <select
                    value={entriesPerPage}
                    onChange={handleChangeEntriesPerPage}
                    className="p-1"
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
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
                      <col className="w-[92.1979px]" />
                      <col className="w-[149.5px]" />
                      <col className="w-[211.469px]" />
                      <col className="w-[132.177px]" />
                      <col className="w-[336.656px]" />
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
                          ATTENDANCE DATE
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          CHECH IN
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          CHECH OUT
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y text-xs text-gray-600">
                      {paginatedPresence.map((p, index) => (
                        <tr key={index} className="h-10">
                          <td className="text-center py-[8px] px-[10px]">
                            {index + 1}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            {p.name}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            {p.attendance_date}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            {p.check_in}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            {p.check_out}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex justify-between mx-10 my-5">
                <div>
                  <p>
                    Showing {paginatedPresence.length} of {filter.length}{" "}
                    entries
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <FaAngleDoubleLeft
                    onClick={() => handlePageChange(1)}
                    className={`cursor-pointer ${
                      currentPage === 1 && "text-gray-300"
                    }`}
                  />
                  <FaAngleLeft
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={`cursor-pointer ${
                      currentPage === 1 && "text-gray-300"
                    }`}
                  />
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handlePageChange(i + 1)}
                      className={`px-2 py-1 ${
                        currentPage === i + 1 ? "bg-gray-300" : "bg-white"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <FaAngleRight
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={`cursor-pointer ${
                      currentPage === totalPages && "text-gray-300"
                    }`}
                  />
                  <FaAngleDoubleRight
                    onClick={() => handlePageChange(totalPages)}
                    className={`cursor-pointer ${
                      currentPage === totalPages && "text-gray-300"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
