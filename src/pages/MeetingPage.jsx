/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  FaAngleDoubleRight,
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleLeft,
} from "react-icons/fa";

const meetingData = [{}];

export default function MeetingPage() {
  const [keyword, setKeyword] = useState("");
  const [meetings, setMeetings] = useState(meetingData);
  const [modal, setModal] = useState({ action: "", user: null });
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleAddMeeting = () => {
    setModal({ action: "add", user: null });
  };

  const handleChangeEntriesPerPage = (e) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <main className="h-full overflow-y-auto bg-gray-50">
      <div className="container grid px-6 mx-auto">
        <div className="my-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            Tabel Meetings
          </h2>
          <button
            onClick={handleAddMeeting}
            className="add-button px-4 py-2 text-sm font-medium text-white transition-colors duration-150 bg-orange-500 border border-transparent rounded-lg active:bg-orange-500 hover:bg-orange-600 focus:outline-none focus:shadow-outline-purple"
          >
            Add Meeting
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
                      <col className="w-[61.9583px]" />
                      <col className="w-[107.531px]" />
                      <col className="w-[83.6458px]" />
                      <col className="w-[140.979px]" />
                      <col className="w-[82.4688px]" />
                      <col className="w-[139.312px]" />
                      <col className="w-[80.8854px]" />
                      <col className="w-[123.99px]" />
                      <col className="w-[101.229px]" />
                    </colgroup>
                    <thead>
                      <tr className="text-xs font-semibold tracking-wide text-left text-gray-600 uppercase border-b bg-gray-50">
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          ID
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          PROJECT
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          TITLE
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          DECRIPTION
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          DATE
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          PARTICIPANT
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          TYPE
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          URL/PLACE
                        </th>
                        <th className="cursor-pointer relative pr-[30px] text-center p-[10px] border-b-[1px] border-gray-600 font-bold">
                          ACTION
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y text-xs text-gray-600">
                      <tr>
                        <td
                          colSpan={9}
                          className="text-center py-3 border-b-[1px] border-gray-600"
                        >
                          No data available in table
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex justify-between mx-10 my-5">
                <div>
                  <p>
                    Showing {0} of {0} entries
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <FaAngleDoubleLeft className="cursor-pointer text-gray-300" />
                  <FaAngleLeft className="cursor-pointer text-gray-300" />
                  <button className="px-2 py-1bg-gray-300 bg-white">1</button>
                  <FaAngleRight className="cursor-pointer text-gray-300" />
                  <FaAngleDoubleRight className="cursor-pointer text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal.action && (
        <MeetingModal
          action={modal.action}
          meeting={modal.meeting}
          onClose={() => setModal({ action: "", user: null })}
          onSave={() => {}}
        />
      )}
    </main>
  );
}

function MeetingModal({ action, meeting, onClose, onSave }) {
  const [formData, setFormData] = useState(
    meeting || {
      title: "",
      description: "",
      date: "",
      project_name: "",
      participant: "",
      type: "",
      url: "",
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
            ? "Add Meeting"
            : action === "edit"
            ? "Edit Meeting"
            : "View Meeting"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Title"
              className="p-2 border rounded"
            />
            <input
              name="description"
              value={formData.description}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Description"
              className="p-2 border rounded"
            />
            <input
              name="date"
              value={formData.date}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Date"
              className="p-2 border rounded"
            />
            <select
              name="project_name"
              value={formData.project_name}
              onChange={handleChange}
              disabled={action === "show"}
              className="p-2 border rounded"
            >
              <option value="" disabled>
                Project Name
              </option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
            <select
              name="project_name"
              value={formData.project_name}
              onChange={handleChange}
              disabled={action === "show"}
              className="p-2 border rounded"
            >
              <option value="" disabled>
                Participant
              </option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
            <select
              name="project_name"
              value={formData.project_name}
              onChange={handleChange}
              disabled={action === "show"}
              className="p-2 border rounded"
            >
              <option value="" disabled>
                Type
              </option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
            <input
              name="point"
              value={formData.point}
              onChange={handleChange}
              disabled={action === "show"}
              placeholder="Url"
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
