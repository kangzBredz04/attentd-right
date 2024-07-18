/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  FaAngleDoubleRight,
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const scheduleData = [
  {
    id: 1,
    username: "Super Admin",
    schedule_name: "Belum terasign ke Schedule",
  },
  {
    id: 2,
    username: "Admin",
    schedule_name: "Belum terasign ke Schedule",
  },
  {
    id: 3,
    username: "User Test",
    schedule_name: "Belum terasign ke Schedule",
  },
  {
    id: 4,
    username: "Tomo",
    schedule_name: "5HK Fulltime",
  },
  {
    id: 5,
    username: "Andre",
    schedule_name: "5HK 3Pagi 2Siang",
  },
  {
    id: 6,
    username: "Joni",
    schedule_name: "10HK Fulltime",
  },
];

export default function ScheduleUserPage() {
  const [keyword, setKeyword] = useState("");
  const [schedules, setSchedules] = useState(scheduleData);
  const [modal, setModal] = useState({ action: "", schedule: null });
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filter = schedules.filter(
    (schedule) =>
      schedule.schedule_name.toLowerCase().includes(keyword.toLowerCase()) ||
      schedule.username.toLowerCase().includes(keyword.toLowerCase())
  );

  const handleEdit = (schedule) => {
    setModal({ action: "edit", schedule });
  };

  const handleDelete = (schedule) => {
    if (
      window.confirm(`Are you sure you want to delete ${schedule.username}?`)
    ) {
      setSchedules(schedules.filter((s) => s.id !== schedule.id));
    }
  };

  const handleSave = (schedule) => {
    if (modal.action === "edit") {
      setSchedules(schedules.map((s) => (s.id === schedule.id ? schedule : s)));
    } else {
      schedule.id = schedules.length + 1;
      setSchedules([...schedules, schedule]);
    }
    setModal({ action: "", schedule: null });
  };

  const handleChangeEntriesPerPage = (e) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filter.length / entriesPerPage);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

  const paginatedSchedules = filter.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  return (
    <main className="h-full overflow-y-auto bg-gray-50">
      <div className="container grid px-6 mx-auto">
        <div className="my-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            Tabel Schedule User
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
                      <col className="w-[89.7917px]" />
                      <col className="w-[212.781px]" />
                      <col className="w-[199.552px]" />
                      <col className="w-[395.875px]" />
                    </colgroup>
                    <thead>
                      <tr className="text-xs font-semibold tracking-wide text-left text-gray-600 uppercase border-b bg-gray-50">
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          ID
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          USER NAME
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          SCHEDULE NAME
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          ACTION
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y text-xs text-gray-600">
                      {paginatedSchedules.map((s, index) => (
                        <tr key={index} className="h-10">
                          <td className="text-center py-[8px] px-[10px]">
                            {index + 1}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            {s.username}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            {s.schedule_name}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            <div className="btn-group flex gap-6 justify-center">
                              <button
                                onClick={() => handleEdit(s)}
                                className="px-4 py-2 inline-block text-sm font-medium text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple"
                              >
                                Assign
                              </button>
                              <Link
                                to={"/admin/schedule/calender"}
                                className="show-button px-4 py-2 inline-block text-sm font-medium text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                              >
                                Show
                              </Link>
                              <button
                                onClick={() => handleDelete(s)}
                                className="px-4 py-2 inline-block text-sm font-medium text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-purple"
                              >
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
                  <p>
                    Showing {paginatedSchedules.length} of {filter.length}{" "}
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
      {modal.action && (
        <ScheduleModal
          action={modal.action}
          schedule={modal.schedule}
          onClose={() => setModal({ action: "", schedule: null })}
          onSave={handleSave}
        />
      )}
    </main>
  );
}

function ScheduleModal({ action, schedule, onClose, onSave }) {
  const [formData, setFormData] = useState(
    schedule || {
      username: "",
      schedule_name: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[50%]">
        <h2 className="text-xl font-bold mb-4">
          {action === "add" ? "Add Schedule" : "Edit Schedule"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="User Name"
              className="p-2 border rounded"
            />
            <input
              name="schedule_name"
              value={formData.schedule_name}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Schedule Name"
              type="text"
              className="p-2 border rounded"
            />
          </div>
          <div className="mt-4 flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-black rounded"
            >
              Cancel
            </button>
            {action !== "show" && (
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Save
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
