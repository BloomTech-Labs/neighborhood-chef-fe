import React, { useState } from "react";

const months = [
  {
    name: "January",
    number: 0,
  },
  {
    name: "February",
    number: 1,
  },
  {
    name: "March",
    number: 2,
  },
  {
    name: "April",
    number: 3,
  },
  {
    name: "May",
    number: 4,
  },
  {
    name: "June",
    number: 5,
  },
  {
    name: "July",
    number: 6,
  },
  {
    name: "August",
    number: 7,
  },
  {
    name: "September",
    number: 8,
  },
  {
    name: "October",
    number: 9,
  },
  {
    name: "November",
    number: 10,
  },
  {
    name: "December",
    number: 11,
  },
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
      <div>{months.find((ele) => ele.number === currentMonth).name}</div>
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
