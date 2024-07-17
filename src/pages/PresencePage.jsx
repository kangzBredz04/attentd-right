/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  FaAngleDoubleRight,
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleLeft,
} from "react-icons/fa";

const notificationData = [
  {
    id: 1,
    user: "super_admin",
    type: "Dashboard",
    message: "admin mengajukan pengajuan perubahan shift!",
  },
  {
    id: 2,
    user: "user_test",
    type: "Notification",
    message: "Notification untuk semua users",
  },
  {
    id: 3,
    user: "admin",
    type: "Notification",
    message: "Notification untuk semua users",
  },
  {
    id: 4,
    user: "super_admin",
    type: "Notification",
    message: "Notification untuk semua users",
  },
];

export default function PresencePage() {
  const [keyword, setKeyword] = useState("");
  const [notifications, setNotifications] = useState(notificationData);
  const [modal, setModal] = useState({ action: "", notification: null });
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filter = notifications.filter(
    (notification) =>
      notification.user.toLowerCase().includes(keyword.toLowerCase()) ||
      notification.type.toLowerCase().includes(keyword.toLowerCase()) ||
      notification.message.toLowerCase().includes(keyword.toLowerCase())
  );

  const handleAddNotification = () => {
    setModal({ action: "add", notification: null });
  };

  const handleSaveNotification = (notification) => {
    if (modal.action === "edit") {
      setNotifications(
        notifications.map((n) => (n.id === notification.id ? notification : n))
      );
    } else {
      notification.id = notifications.length + 1;
      setNotifications([...notifications, notification]);
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

  const paginatedNotification = filter.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );
  return (
    <main className="h-full overflow-y-auto">
      <div className="container grid px-6 mx-auto">
        <div className="my-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            Tabel Notification
          </h2>
          <button
            onClick={handleAddNotification}
            className="add-button px-4 py-2 text-sm font-medium text-white transition-colors duration-150 bg-orange-500 border border-transparent rounded-lg active:bg-orange-500 hover:bg-orange-600 focus:outline-none focus:shadow-outline-purple"
          >
            Add Notification
          </button>
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
                      <col className="w-[161.135px]" />
                      <col className="w-[150.438px]" />
                      <col className="w-[518.229px]" />
                    </colgroup>
                    <thead>
                      <tr className="text-xs font-semibold tracking-wide text-left text-gray-600 uppercase border-b bg-gray-50">
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          ID
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          USER
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          TYPE
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          MESSAGE
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y text-xs text-gray-600">
                      {paginatedNotification.map((n, index) => (
                        <tr key={index} className="h-10">
                          <td className="text-center py-[8px] px-[10px]">
                            {index + 1}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            {n.user}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            {n.type}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            {n.message}
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
                    Showing {paginatedNotification.length} of {filter.length}{" "}
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
        <NotificationModal
          action={modal.action}
          notification={modal.notification}
          onClose={() => setModal({ action: "", notification: null })}
          onSave={handleSaveNotification}
        />
      )}
    </main>
  );
}

function NotificationModal({ action, notification, onClose, onSave }) {
  const [formData, setFormData] = useState(
    notification || {
      user: "",
      type: "",
      message: "",
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
          {action === "add"
            ? "Add Notification"
            : action === "edit"
            ? "Edit Notification"
            : "View Notification"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <select
              name="user"
              value={formData.user}
              onChange={handleChange}
              disabled={action === "show"}
              className="p-2 border rounded"
            >
              <option value="semua user">Semua user</option>
              <option value="Super Admin">Super Admin</option>
              <option value="Admin">Admin</option>
              <option value="Client">Client</option>
            </select>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              disabled={action === "show"}
              className="p-2 border rounded"
            >
              <option value="" disabled>
                Type
              </option>
              <option value="Dashboard">Dashboard</option>
              <option value="Notification">Notification</option>
            </select>
            <input
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Message"
              className="p-2 border rounded h-32"
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
