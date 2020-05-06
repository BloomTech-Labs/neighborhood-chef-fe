import React from "react";
import MonthPicker from "./MonthPicker.js";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../../utilities/reducers";
import thunk from "redux-thunk";

import "@testing-library/jest-dom/extend-expect";

const store = createStore(rootReducer, applyMiddleware(thunk));

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
      <Provider store={store}>
        <BrowserRouter>
          <MonthPicker />
        </BrowserRouter>
      </Provider>
    );
  });

  test("MonthPicker component renders current month first", () => {
    const initializeDate = new Date();
    const currentMonth = `${
      months[initializeDate.getMonth()]
    } ${initializeDate.getUTCFullYear()}`;
    expect(MonthPickerComponent.getByText(`${currentMonth}`));
  });
});
