import React, { useState } from "react";
import dayjs from "dayjs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const startDay = currentDate.startOf("month").startOf("week");
  const endDay = currentDate.endOf("month").endOf("week");
  const today = dayjs();

  const generateCalendar = () => {
    const date = startDay.clone().subtract(1, "day");
    const calendar = [];
    while (date.isBefore(endDay, "day")) {
      calendar.push(
        Array(7)
          .fill(0)
          .map(() => date.add(1, "day").clone())
      );
    }
    return calendar;
  };

  const isToday = (day) => day.isSame(today, "day");

  const isCurrentMonth = (day) => day.isSame(currentDate, "month");

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  const handleToday = () => {
    setCurrentDate(today);
  };

  const calendar = generateCalendar();

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <button
          className="text-gray-600 hover:text-gray-800"
          onClick={handlePrevMonth}
        >
          <FaChevronLeft />
        </button>
        <h2 className="text-xl font-semibold">
          {currentDate.format("MMMM YYYY")}
        </h2>
        <button
          className="text-gray-600 hover:text-gray-800"
          onClick={handleNextMonth}
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="flex justify-center mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          onClick={handleToday}
        >
          Today
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-semibold text-gray-600">
            {day}
          </div>
        ))}
        {calendar.map((week, i) => (
          <React.Fragment key={i}>
            {week.map((day, idx) => (
              <div
                key={idx}
                className={`text-center p-2 rounded-lg ${
                  isToday(day)
                    ? "bg-yellow-300"
                    : isCurrentMonth(day)
                    ? "bg-gray-100"
                    : "bg-gray-200"
                }`}
              >
                {day.date()}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
