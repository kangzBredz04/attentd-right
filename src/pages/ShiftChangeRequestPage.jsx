/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  FaAngleDoubleRight,
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleLeft,
} from "react-icons/fa";

const requestData = [
  {
    id: 1,
    approval: "Pending",
    name: "Admin",
    shift: "Pagi",
    start_hour: "09.00.00",
    end_hour: "13.00.00",
    reason: "izin ganti shift",
    is_temporary: "Temporary",
    start_date: "Tidak ada tanggal",
    end_date: "Tidak ada tanggal",
  },
  {
    id: 2,
    approval: "Pending",
    name: "Super Admin",
    shift: "Siang",
    start_hour: "13.00.00",
    end_hour: "17.00.00",
    reason: "izin ganti shift",
    is_temporary: "Temporary",
    start_date: "Tidak ada tanggal",
    end_date: "Tidak ada tanggal",
  },
];

export default function ShiftChangeRequestPage() {
  const [keyword, setKeyword] = useState("");
  const [requests, setRequests] = useState(requestData);
  const [modal, setModal] = useState({ action: "", user: null });
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filter = requests.filter(
    (request) =>
      request.name.toLowerCase().includes(keyword.toLowerCase()) ||
      request.shift.toLowerCase().includes(keyword.toLowerCase()) ||
      request.approval.toLowerCase().includes(keyword.toLowerCase())
  );

  const handleShow = (request) => {
    setModal({ action: "show", request });
  };

  const handleEdit = (request) => {
    setModal({ action: "edit", request });
  };

  const handleSaveUser = (request) => {
    if (modal.action === "edit") {
      setRequests(requests.map((r) => (r.id === request.id ? request : r)));
    } else {
      request.id = requests.length + 1;
      setRequests([...requests, request]);
    }
    setModal({ action: "", user: null });
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

  const paginatedRequest = filter.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );
  return (
    <main className="h-full overflow-y-auto">
      <div className="container grid px-6 mx-auto">
        <div className="my-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            Tabel Shift Change Requests
          </h2>
          {/* <button
            onClick={handleAdd}
            className="add-button px-4 py-2 text-sm font-medium text-white transition-colors duration-150 bg-orange-500 border border-transparent rounded-lg active:bg-orange-500 hover:bg-orange-600 focus:outline-none focus:shadow-outline-purple"
          >
            Add User
          </button> */}
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
                          NEW SHIFT
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          APPROVAL
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          ACTION
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y text-xs text-gray-600">
                      {paginatedRequest.map((r, index) => (
                        <tr key={index} className="h-10">
                          <td className="text-center py-[8px] px-[10px]">
                            {index + 1}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            {r.name}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            {r.shift}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            {r.shift}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            <div className="btn-group flex gap-6 justify-center">
                              <button
                                onClick={() => handleShow(r)}
                                className="px-4 py-2 inline-block text-sm font-medium text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-purple"
                              >
                                Show
                              </button>
                              <button
                                onClick={() => handleEdit(r)}
                                className="px-4 py-2 inline-block text-sm font-medium text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple"
                              >
                                Edit
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
                    Showing {paginatedRequest.length} of {filter.length} entries
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
        <ShiftModal
          action={modal.action}
          request={modal.request}
          onClose={() => setModal({ action: "", request: null })}
          onSave={handleSaveUser}
        />
      )}
    </main>
  );
}

function ShiftModal({ action, request, onClose, onSave }) {
  const [formData, setFormData] = useState(
    request || {
      approval: "",
      name: "",
      shift: "",
      start_hour: "",
      end_hour: "",
      reason: "",
      is_temporary: "",
      start_date: "",
      end_date: "",
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
          {action === "edit" ? "Approval Shift Change" : "Show Shift Change"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <select
              name="approval"
              value={formData.approval}
              onChange={handleChange}
              disabled={action === "show"}
              className="p-2 border rounded"
            >
              <option value="" disabled>
                Select Approval
              </option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
            </select>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Name"
              className="p-2 border rounded"
            />
            <input
              name="shift"
              value={formData.shift}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Shift"
              className="p-2 border rounded"
            />
            <input
              name="start_hour"
              value={formData.start_hour}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Start Hour"
              type="time"
              className="p-2 border rounded"
            />
            <input
              name="end_hour"
              value={formData.end_hour}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="End Hour"
              type="time"
              className="p-2 border rounded"
            />
            <input
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Reason"
              type="text"
              className="p-2 border rounded"
            />
            <input
              name="is_temporary"
              value={formData.is_temporary}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Is Temporary"
              type="text"
              className="p-2 border rounded"
            />
            <input
              name="start_date"
              value={formData.start_date}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Start Date"
              type="date"
              className="p-2 border rounded"
            />
            <input
              name="end_date"
              value={formData.end_date}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="End Date"
              type="date"
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
