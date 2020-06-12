import React from "react";
import CalendarView from "./CalendarView.js";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("Test CalendarView static properties", () => {
  let store;
  let CalendarViewComponent;
  beforeEach(() => {
    sessionStorage.setItem("user", JSON.stringify({ id: 1 }));
    store = mockStore({});
    CalendarViewComponent = render(
      <Provider store={store}>
        <BrowserRouter>
          <CalendarView />
        </BrowserRouter>
      </Provider>
    );
  });

  test("CalendarView component renders", () => {
    expect(CalendarViewComponent).toBeDefined();
    // const firstDiv = document.querySelector(".calendar-view-main");
    // expect(firstDiv.toBeInDocument);
  });
});
