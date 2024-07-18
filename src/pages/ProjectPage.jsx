/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  FaAngleDoubleRight,
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleLeft,
} from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    name: "test",
    point: 5001,
    deadline: "25 June 2024 12:00 AM",
    progress: "80.00%",
    status: "planing",
    description: "",
    author: "",
    member: "",
  },
  {
    id: 2,
    name: "testw",
    point: 5002,
    deadline: "25 June 2024 12:00 AM",
    progress: "0.00%",
    status: "planing",
    description: "",
    author: "",
    member: "",
  },
  {
    id: 3,
    name: "hai",
    point: 5003,
    deadline: "25 July 2024 12:00 AM",
    progress: "50.00%",
    status: "planing",
    description: "",
    author: "",
    member: "",
  },
  {
    id: 4,
    name: "hello",
    point: 5004,
    deadline: "20 June 2024 12:00 AM",
    progress: "100.00%",
    status: "planing",
    description: "",
    author: "",
    member: "",
  },
  {
    id: 5,
    name: "world",
    point: 5005,
    deadline: "04 March 2024 12:00 AM",
    progress: "40.00%",
    status: "planing",
    description: "",
    author: "",
    member: "",
  },
];

export default function ProjectPage() {
  const [keyword, setKeyword] = useState("");
  const [projects, setProjects] = useState(projectsData);
  const [modal, setModal] = useState({ action: "", project: null });
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filter = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(keyword.toLowerCase()) ||
      project.deadline.toLowerCase().includes(keyword.toLowerCase()) ||
      project.status.toLowerCase().includes(keyword.toLowerCase()) ||
      project.point.toString().toLowerCase().includes(keyword.toLowerCase())
  );

  const handleAddProject = () => {
    setModal({ action: "add", project: null });
  };

  const handleShowProject = (project) => {
    console.log(project);
    setModal({ action: "show", project });
  };

  const handleEditProject = (project) => {
    console.log(project);
    setModal({ action: "edit", project });
  };

  const handleDeleteProject = (project) => {
    if (window.confirm(`Are you sure you want to delete ${project.name}?`)) {
      setProjects(projects.filter((u) => u.id !== project.id));
    }
  };

  const handleSaveUser = (project) => {
    if (modal.action === "edit") {
      setProjects(projects.map((u) => (u.id === project.id ? project : u)));
    } else {
      project.id = projects.length + 1;
      setProjects([...projects, project]);
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

  const paginatedProjects = filter.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  return (
    <main className="h-full overflow-y-auto bg-gray-50">
      <div className="container grid px-6 mx-auto">
        <div className="my-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            Tabel Project
          </h2>
          <button
            onClick={handleAddProject}
            className="add-button px-4 py-2 text-sm font-medium text-white transition-colors duration-150 bg-orange-500 border border-transparent rounded-lg active:bg-orange-500 hover:bg-orange-600 focus:outline-none focus:shadow-outline-purple"
          >
            Add Project
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
                      <col className="w-[54.2917px]" />
                      <col className="w-[135.604px]" />
                      <col className="w-[79.8125px]" />
                      <col className="w-[187.708px]" />
                      <col className="w-[104.802px]" />
                      <col className="w-[86.4062px]" />
                      <col className="w-[273.375px]" />
                    </colgroup>
                    <thead>
                      <tr className="text-xs font-semibold tracking-wide text-left text-gray-600 uppercase border-b bg-gray-50">
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          ID
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          PROJECT NAME
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          POINT
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          DEADLINE
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          PROGRESS
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          STATUS
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          ACTION
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y text-xs text-gray-600">
                      {paginatedProjects.map((p, index) => (
                        <tr key={index} className="h-10">
                          <td className="text-center py-[8px] px-[10px]">
                            {p.id}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            {p.name}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            {p.point}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            {p.deadline}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            <div className="flex items-center">
                              <div className="relative w-24 h-4 bg-gray-200 rounded-full">
                                <div
                                  className="absolute top-0 left-0 h-4 rounded-full bg-blue-500"
                                  style={{ width: p.progress }}
                                />
                              </div>
                              <span className="ml-2 text-sm font-medium">
                                {p.progress}
                              </span>
                            </div>
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            {p.status}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            <div className="btn-group flex gap-6 justify-center">
                              <button
                                onClick={() => handleShowProject(p)}
                                className="px-4 py-2 inline-block text-sm font-medium text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-purple"
                              >
                                Show
                              </button>
                              <button
                                onClick={() => handleEditProject(p)}
                                className="px-4 py-2 inline-block text-sm font-medium text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteProject(p)}
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
                    Showing {paginatedProjects.length} of {filter.length}{" "}
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
        <ProjectModal
          action={modal.action}
          project={modal.project}
          onClose={() => setModal({ action: "", user: null })}
          onSave={handleSaveUser}
        />
      )}
    </main>
  );
}

function ProjectModal({ action, project, onClose, onSave }) {
  const [formData, setFormData] = useState(
    project || {
      name: "",
      description: "",
      deadline: "",
      point: "",
      status: "",
      author: "",
      member: "",
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
            ? "Add Project"
            : action === "edit"
            ? "Edit Project"
            : "View Project"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Project Name"
              className="p-2 border rounded"
            />
            <input
              name="description"
              value={formData.description}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Description Project"
              className="p-2 border rounded"
            />
            <input
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Deadline"
              className="p-2 border rounded"
            />
            <input
              name="point"
              value={formData.point}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Point"
              className="p-2 border rounded"
            />
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              disabled={action === "show"}
              className="p-2 border rounded"
            >
              <option value="" disabled>
                Status
              </option>
              <option value="Planning">Planning</option>
              <option value="On Going">On Going</option>
              <option value="Done">Done</option>
            </select>
            <select
              name="author"
              value={formData.author}
              onChange={handleChange}
              disabled={action === "show"}
              className="p-2 border rounded"
            >
              <option value="" disabled>
                Author
              </option>
              <option value="Jhon Doe">Jhon Doe</option>
              <option value="Anonymus">Anonymus</option>
              <option value="WHo">Who</option>
            </select>
            <select
              name="member"
              value={formData.member}
              onChange={handleChange}
              disabled={action === "show"}
              className="p-2 border rounded"
            >
              <option value="" disabled>
                Member
              </option>
              <option value="A">A</option>
              <option value="A">A</option>
              <option value="A">A</option>
            </select>
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
