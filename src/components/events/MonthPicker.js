import React, { useState } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MonthPicker = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  return (
    <div className="month-picker-container">
      <div
        onClick={() =>
          setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1)
        }
        style={{ cursor: "pointer" }}
      >
        {"<"}
      </div>
      <div>{months[currentMonth]}</div>
      <div
        onClick={() =>
          setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1)
        }
        style={{ cursor: "pointer" }}
      >
        {">"}
      </div>
    </div>
  );
};

export default MonthPicker;
