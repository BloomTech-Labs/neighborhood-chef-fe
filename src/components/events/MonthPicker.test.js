import React from "react";
import MonthPicker from "./MonthPicker.js";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

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

describe("Test month picker properties", () => {
  let MonthPickerComponent;
  beforeEach(() => {
    MonthPickerComponent = render(
      <BrowserRouter>
        <MonthPicker />
      </BrowserRouter>
    );
  });

  test("MonthPicker component renders current month first", () => {
    const currentMonth = new Date().getMonth();
    expect(MonthPickerComponent.getByText(`${months[currentMonth]}`));
  });
});
