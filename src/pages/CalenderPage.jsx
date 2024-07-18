import { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/id";

dayjs.locale("id");

export default function CalendarPage() {
  // basic usage
  dayjs().format();

  // parse
  dayjs("2018-08-08").format();

  // format
  dayjs().format("YYYY-MM-DD");
  const [date, setDate] = useState(dayjs());

  const startDay = date.startOf("month").startOf("week");
  const endDay = date.endOf("month").endOf("week");
  const today = dayjs();

  const calendar = [];
  let currentDay = startDay;

  while (currentDay <= endDay) {
    calendar.push(currentDay);
    currentDay = currentDay.add(1, "day");
  }

  const handlePrevMonth = () => {
    setDate(date.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setDate(date.add(1, "month"));
  };

  return (
    <div className="h-screen flex justify-center items-center p-6">
      <div className="w-full h-full">
        <div className="h-full flex flex-col">
          <div className="flex justify-between items-center mb-4 p-4 bg-gray-200">
            <button
              onClick={handlePrevMonth}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Prev
            </button>
            <h2 className="text-xl font-bold">{date.format("MMMM YYYY")}</h2>
            <button
              onClick={handleNextMonth}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Next
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 flex-grow p-2 bg-white">
            {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((day) => (
              <div key={day} className="font-bold">
                {day}
              </div>
            ))}
            {calendar.map((day, index) => (
              <div
                key={index}
                className={`flex justify-center items-center h-20 border ${
                  day.isSame(today, "day") ? "bg-blue-500 text-white" : ""
                } ${!day.isSame(date, "month") ? "text-gray-400" : ""}`}
              >
                {day.date()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
