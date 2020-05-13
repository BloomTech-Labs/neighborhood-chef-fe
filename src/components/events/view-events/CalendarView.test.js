import React from "react";
import CalendarView from "./CalendarView.js";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../../../utilities/reducers";
import thunk from "redux-thunk";

import "@testing-library/jest-dom/extend-expect";

const store = createStore(rootReducer, applyMiddleware(thunk));

describe("Test CalendarView static properties", () => {
  let CalendarViewComponent;
  beforeEach(() => {
    CalendarViewComponent = render(
      <Provider store={store}>
        <BrowserRouter>
          <CalendarView />
        </BrowserRouter>
      </Provider>
    );
  });

  test("CalendarView component renders", () => {
    const firstDiv = document.querySelector(".calendar-view-main");
    expect(firstDiv.toBeInDocument);
  });
});
