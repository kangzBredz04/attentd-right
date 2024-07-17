import { useState } from "react";

const projectsData = [
  {
    id: 1,
    name: "test",
    point: 500,
    deadline: "25 June 2024 12:00 AM",
    progress: "80.00%",
    status: "planing",
  },
  {
    id: 2,
    name: "testw",
    point: 5002,
    deadline: "25 June 2024 12:00 AM",
    progress: "0.00%",
    status: "planing",
  },
  // Add more projects as needed
];

export default function ProjectPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = projectsData.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProjects.length / entriesPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  return (
    <div className="container mx-auto px-6 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-700">Table Project</h2>
        <button className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600">
          Add Project
        </button>
      </div>
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <select
                value={entriesPerPage}
                onChange={(e) => setEntriesPerPage(parseInt(e.target.value))}
                className="p-2 border rounded"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <span className="ml-2">entries per page</span>
            </div>
            <div className="flex items-center">
              <label htmlFor="search" className="mr-2">
                Search:
              </label>
              <input
                id="search"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border p-2 rounded"
              />
            </div>
          </div>
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-600 uppercase bg-gray-50">
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">PROJECT NAME</th>
                <th className="px-4 py-3">POINT</th>
                <th className="px-4 py-3">DEADLINE</th>
                <th className="px-4 py-3">PROGRESS</th>
                <th className="px-4 py-3">STATUS</th>
                <th className="px-4 py-3">ACTION</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedProjects.map((project) => (
                <tr key={project.id} className="text-gray-700">
                  <td className="px-4 py-3 text-sm">{project.id}</td>
                  <td className="px-4 py-3 text-sm">{project.name}</td>
                  <td className="px-4 py-3 text-sm">{project.point}</td>
                  <td className="px-4 py-3 text-sm">{project.deadline}</td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex items-center">
                      <div className="relative w-24 h-4 bg-gray-200 rounded-full">
                        <div
                          className="absolute top-0 left-0 h-4 rounded-full bg-blue-500"
                          style={{ width: project.progress }}
                        />
                      </div>
                      <span className="ml-2 text-sm font-medium">
                        {project.progress}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span className="px-2 py-1 font-semibold leading-tight rounded-full bg-gray-100 text-gray-700">
                      {project.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <button className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded hover:bg-green-600">
                        Show
                      </button>
                      <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600">
                        Edit
                      </button>
                      <button className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-4">
            <p>
              Showing {currentPage} to {totalPages} of {filteredProjects.length}{" "}
              entries
            </p>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => handlePageChange(1)}
                className={`px-2 py-1 ${
                  currentPage === 1 ? "text-gray-300" : ""
                }`}
                disabled={currentPage === 1}
              >
                &laquo;
              </button>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className={`px-2 py-1 ${
                  currentPage === 1 ? "text-gray-300" : ""
                }`}
                disabled={currentPage === 1}
              >
                &lsaquo;
              </button>
              {[...Array(totalPages).keys()].map((number) => (
                <button
                  key={number}
                  onClick={() => handlePageChange(number + 1)}
                  className={`px-2 py-1 ${
                    currentPage === number + 1 ? "bg-gray-300" : "bg-white"
                  }`}
                >
                  {number + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className={`px-2 py-1 ${
                  currentPage === totalPages ? "text-gray-300" : ""
                }`}
                disabled={currentPage === totalPages}
              >
                &rsaquo;
              </button>
              <button
                onClick={() => handlePageChange(totalPages)}
                className={`px-2 py-1 ${
                  currentPage === totalPages ? "text-gray-300" : ""
                }`}
                disabled={currentPage === totalPages}
              >
                &raquo;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
