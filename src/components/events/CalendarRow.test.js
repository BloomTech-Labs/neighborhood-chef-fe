import React from "react";
import CalendarRow from "./CalendarRow.js";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../../utilities/reducers";
import thunk from "redux-thunk";

import "@testing-library/jest-dom/extend-expect";

const store = createStore(rootReducer, applyMiddleware(thunk));

describe("Test CalendarRow static properties", () => {
  let CalendarRowComponent;
  beforeEach(() => {
    CalendarRowComponent = render(
      <Provider store={store}>
        <BrowserRouter>
          <CalendarRow />
        </BrowserRouter>
      </Provider>
    );
  });

  test("CalendarRow component renders", () => {
    const firstDiv = document.querySelector(".calendar-row");
    expect(firstDiv.toBeInDocument);
  });
});
