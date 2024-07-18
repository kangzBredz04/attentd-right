import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import {
  FaUsers,
  FaFileCode,
  FaClipboardList,
  FaClipboardCheck,
} from "react-icons/fa";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default function Dashboard() {
  const doughnutData = {
    labels: ["Man", "Woman"],
    datasets: [
      {
        label: "Total users by gender",
        data: [5, 1],
        backgroundColor: ["#0000FF", "#FFC0CB"],
        hoverBackgroundColor: ["#00008B", "#FF69B4"],
      },
    ],
  };

  const barData = {
    labels: ["June"],
    datasets: [
      {
        label: "Total Projects",
        backgroundColor: "#20c997",
        borderColor: "#20c997",
        borderWidth: 1,
        hoverBackgroundColor: "#17a2b8",
        hoverBorderColor: "#17a2b8",
        data: [2],
      },
    ],
  };

  return (
    <main className="h-full overflow-y-auto">
      <div className="container mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Dashboard</h2>
        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
          <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
            <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full">
              <FaUsers />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600">
                Total users
              </p>
              <p className="text-lg font-semibold text-gray-700">6</p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
            <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full">
              <FaClipboardList />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600">
                Project planning
              </p>
              <p className="text-lg font-semibold text-gray-700">2</p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
            <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
              <FaFileCode />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600">
                Project Ongoing
              </p>
              <p className="text-lg font-semibold text-gray-700">0</p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
            <div className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full">
              <FaClipboardCheck />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600">
                Project done
              </p>
              <p className="text-lg font-semibold text-gray-700">0</p>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs">
            <h4 className="mb-4 font-semibold text-gray-800">
              Total users by gender
            </h4>
            <div className="relative h-64">
              <Doughnut data={doughnutData} />
            </div>
          </div>

          <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs">
            <h4 className="mb-4 font-semibold text-gray-800">
              Number of Projects Per Month
            </h4>
            <div className="relative h-64">
              <Bar
                data={barData}
                options={{ scales: { y: { beginAtZero: true } } }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
