/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  FaAngleDoubleRight,
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleLeft,
} from "react-icons/fa";

const usersData = [
  {
    id: 1,
    name: "Wahyu",
    role: "Super Admin",
    email: "wahyu@gmail.com",
    gender: "Male",
  },
  {
    id: 2,
    name: "Super Admin",
    role: "Super Admin",
    email: "superadmin@gmail.com",
    gender: "Female",
  },
  {
    id: 3,
    name: "Jhon Doe",
    role: "Admin",
    email: "jhondoe@gmail.com",
    gender: "Male",
  },
  {
    id: 4,
    name: "Client",
    role: "Client",
    email: "client@gmail.com",
    gender: "Female",
  },
  {
    id: 5,
    name: "Who",
    role: "Client",
    email: "who@gmail.com",
    gender: "Male",
  },
];

export default function UserPage() {
  const [keyword, setKeyword] = useState("");
  const [users, setUsers] = useState(usersData);
  const [modal, setModal] = useState({ action: "", user: null });
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filter = users.filter(
    (user) =>
      user.email.toLowerCase().includes(keyword.toLowerCase()) ||
      user.name.toLowerCase().includes(keyword.toLowerCase()) ||
      user.role.toLowerCase().includes(keyword.toLowerCase())
  );

  const handleAddUser = () => {
    setModal({ action: "add", user: null });
  };

  const handleShowUser = (user) => {
    setModal({ action: "show", user });
  };

  const handleEditUser = (user) => {
    setModal({ action: "edit", user });
  };

  const handleDeleteUser = (user) => {
    if (window.confirm(`Are you sure you want to delete ${user.name}?`)) {
      setUsers(users.filter((u) => u.id !== user.id));
    }
  };

  const handleSaveUser = (user) => {
    if (modal.action === "edit") {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
    } else {
      user.id = users.length + 1;
      setUsers([...users, user]);
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

  const paginatedUsers = filter.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  return (
    <main className="h-full overflow-y-auto bg-gray-50">
      <div className="container grid px-6 mx-auto">
        <div className="my-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-700">Tabel Users</h2>
          <button
            onClick={handleAddUser}
            className="add-button px-4 py-2 text-sm font-medium text-white transition-colors duration-150 bg-orange-500 border border-transparent rounded-lg active:bg-orange-500 hover:bg-orange-600 focus:outline-none focus:shadow-outline-purple"
          >
            Add User
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
                      {paginatedUsers.map((u, index) => (
                        <tr key={index} className="h-10">
                          <td className="text-center py-[8px] px-[10px]">
                            {u.id}
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
                              <button
                                onClick={() => handleShowUser(u)}
                                className="px-4 py-2 inline-block text-sm font-medium text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-purple"
                              >
                                Show
                              </button>
                              <button
                                onClick={() => handleEditUser(u)}
                                className="px-4 py-2 inline-block text-sm font-medium text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteUser(u)}
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
                    Showing {paginatedUsers.length} of {filter.length} entries
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
        <UserModal
          action={modal.action}
          user={modal.user}
          onClose={() => setModal({ action: "", user: null })}
          onSave={handleSaveUser}
        />
      )}
    </main>
  );
}

function UserModal({ action, user, onClose, onSave }) {
  const [formData, setFormData] = useState(
    user || {
      name: "",
      role: "",
      email: "",
      password: "",
      fullName: "",
      birthDate: "",
      joinDate: "",
      points: "",
      gender: "",
      phone: "",
      religion: "",
      companyName: "",
      companyBranch: "",
      position: "",
      division: "",
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
            ? "Add User"
            : action === "edit"
            ? "Edit User"
            : "View User"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Name"
              className="p-2 border rounded"
            />
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              disabled={action === "show"}
              className="p-2 border rounded"
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="Super Admin">Super Admin</option>
              <option value="Admin">Admin</option>
              <option value="Client">Client</option>
            </select>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Email"
              className="p-2 border rounded"
            />
            {action !== "show" && (
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="p-2 border rounded"
              />
            )}
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Full Name"
              className="p-2 border rounded"
            />
            <input
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Birth Date"
              className="p-2 border rounded"
            />
            <input
              name="joinDate"
              value={formData.joinDate}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Join Date"
              className="p-2 border rounded"
            />
            <input
              name="points"
              value={formData.points}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Points"
              type="number"
              className="p-2 border rounded"
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              disabled={action === "show"}
              className="p-2 border rounded"
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Phone"
              className="p-2 border rounded"
            />
            <input
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Religion"
              className="p-2 border rounded"
            />
            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Company Name"
              className="p-2 border rounded"
            />
            <input
              name="companyBranch"
              value={formData.companyBranch}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Company Branch"
              className="p-2 border rounded"
            />
            <input
              name="position"
              value={formData.position}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Position"
              className="p-2 border rounded"
            />
            <input
              name="division"
              value={formData.division}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Division"
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
