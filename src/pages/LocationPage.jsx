/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  FaAngleDoubleRight,
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleLeft,
} from "react-icons/fa";

const locationData = [
  {
    id: 1,
    office_name: "PT Otak Kanan - main office",
    latitude: -7.320197958175919,
    longtitude: 112.73149962808996,
  },
  { id: 2, office_name: "Googleplex", latitude: 37.422, longtitude: -122.084 },
  {
    id: 3,
    office_name: "Sydney Opera House",
    latitude: -33.8567844,
    longtitude: 151.213108,
  },
  {
    id: 4,
    office_name: "Eiffel Tower",
    latitude: 48.8588443,
    longtitude: 2.2943506,
  },
  {
    id: 5,
    office_name: "Statue of Liberty",
    latitude: 40.689247,
    longtitude: -74.044502,
  },
  {
    id: 6,
    office_name: "Tokyo Tower",
    latitude: 35.6585805,
    longtitude: 139.7454329,
  },
  {
    id: 7,
    office_name: "Louvre Museum",
    latitude: 48.8606111,
    longtitude: 2.337644,
  },
  {
    id: 8,
    office_name: "Burj Khalifa",
    latitude: 25.197197,
    longtitude: 55.2743764,
  },
  {
    id: 9,
    office_name: "Colosseum",
    latitude: 41.890251,
    longtitude: 12.492373,
  },
  {
    id: 10,
    office_name: "Christ the Redeemer",
    latitude: -22.951916,
    longtitude: -43.2104872,
  },
];

export default function LocationPage() {
  const [keyword, setKeyword] = useState("");
  const [locations, setLocations] = useState(locationData);
  const [modal, setModal] = useState({ action: "", location: null });
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filter = locations.filter((location) =>
    location.office_name.toLowerCase().includes(keyword.toLowerCase())
  );

  const handleAddLocation = () => {
    setModal({ action: "add", location: null });
  };

  const handleShowLocation = (location) => {
    setModal({ action: "show", location });
  };

  const handleEditLocation = (location) => {
    setModal({ action: "edit", location });
  };

  const handleDeleteLocation = (location) => {
    if (
      window.confirm(`Are you sure you want to delete ${location.office_name}?`)
    ) {
      setLocations(locations.filter((l) => l.id !== location.id));
    }
  };

  const handleSaveLocation = (location) => {
    if (modal.action === "edit") {
      setLocations(locations.map((l) => (l.id === location.id ? location : l)));
    } else {
      location.id = locations.length + 1;
      setLocations([...locations, location]);
    }
    setModal({ action: "", location: null });
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

  const paginatedLocations = filter.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );
  return (
    <main className="h-full overflow-y-auto">
      <div className="container grid px-6 mx-auto">
        <div className="my-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            Tabel Location
          </h2>
          <button
            onClick={handleAddLocation}
            className="add-button px-4 py-2 text-sm font-medium text-white transition-colors duration-150 bg-orange-500 border border-transparent rounded-lg active:bg-orange-500 hover:bg-orange-600 focus:outline-none focus:shadow-outline-purple"
          >
            Add Location
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
                      <col className="w-[53.2604px]" />
                      <col className="w-[216.781px]" />
                      <col className="w-[167.875px]" />
                      <col className="w-[170.094px]" />
                      <col className="w-[360.188px]" />
                    </colgroup>
                    <thead>
                      <tr className="text-xs font-semibold tracking-wide text-left text-gray-600 uppercase border-b bg-gray-50">
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          ID
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          OFFICE NAME
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          LATITUDE
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          LONGTITUDE
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          ACTION
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y text-xs text-gray-600">
                      {paginatedLocations.map((l, index) => (
                        <tr key={index} className="h-10">
                          <td className="text-center py-[8px] px-[10px]">
                            {index + 1}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            {l.office_name}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            {l.latitude}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            {l.longtitude}
                          </td>
                          <td className="text-center py-[8px] px-[10px]">
                            <div className="btn-group flex gap-6 justify-center">
                              <button
                                onClick={() => handleShowLocation(l)}
                                className="show-button px-4 py-2 inline-block text-sm font-medium text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                              >
                                Show
                              </button>
                              <button
                                onClick={() => handleEditLocation(l)}
                                className="px-4 py-2 inline-block text-sm font-medium text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteLocation(l)}
                                className="px-4 py-2 inline-block text-sm font-medium text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-purple"
                              >
                                Delete
                              </button>
                              <button
                                // onClick={() => handleDeleteLocation(l)}
                                className="px-4 py-2 inline-block text-sm font-medium text-white transition-colors duration-150 bg-orange-600 border border-transparent rounded-lg active:bg-orange-600 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple"
                              >
                                Maps
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
                    Showing {paginatedLocations.length} of {filter.length}{" "}
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
        <LocationModal
          action={modal.action}
          location={modal.location}
          onClose={() => setModal({ action: "", location: null })}
          onSave={handleSaveLocation}
        />
      )}
    </main>
  );
}

function LocationModal({ action, location, onClose, onSave }) {
  const [formData, setFormData] = useState(
    location || {
      office_name: "",
      latitude: null,
      longtitude: null,
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
            ? "Add Location"
            : action === "edit"
            ? "Edit Location"
            : "View Location"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <input
              name="office_name"
              value={formData.office_name}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Office Name"
              className="p-2 border rounded"
            />
            <input
              name="latitude"
              value={formData.latitude}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Latitude"
              className="p-2 border rounded"
            />
            <input
              name="longtitude"
              value={formData.longtitude}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Longtitude"
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
