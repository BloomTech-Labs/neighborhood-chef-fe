import React, { useState } from "react";

const months = [
  {
    name: "January",
    number: 1,
  },
  {
    name: "February",
    number: 2,
  },
  {
    name: "March",
    number: 3,
  },
  {
    name: "April",
    number: 4,
  },
  {
    name: "May",
    number: 5,
  },
  {
    name: "June",
    number: 6,
  },
  {
    name: "July",
    number: 7,
  },
  {
    name: "August",
    number: 8,
  },
  {
    name: "September",
    number: 9,
  },
  {
    name: "October",
    number: 10,
  },
  {
    name: "November",
    number: 11,
  },
  {
    name: "December",
    number: 12,
  },
];

const MonthPicker = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  return (
    <div>
      <span
        onClick={() =>
          setCurrentMonth(currentMonth === 1 ? 12 : currentMonth - 1)
        }
      >
        {"<"}
      </span>
      <span>{months.find((ele) => ele.number === currentMonth).name}</span>
      <span
        onClick={() =>
          setCurrentMonth(currentMonth === 12 ? 1 : currentMonth + 1)
        }
      >
        {">"}
      </span>
    </div>
  );
};

export default MonthPicker;
