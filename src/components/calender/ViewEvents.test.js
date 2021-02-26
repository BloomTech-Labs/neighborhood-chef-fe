import React from "react";
import ViewEvents from "./ViewEvents.js";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../../../utilities/reducers";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

describe("Test view event static properties", () => {
  let ViewEventsComponent;
  beforeEach(() => {
    sessionStorage.setItem("user", JSON.stringify({ id: 1 }));
    ViewEventsComponent = render(
      <Provider store={store}>
        <BrowserRouter>
          <ViewEvents />
        </BrowserRouter>
      </Provider>
    );
  });

  test("ViewEvents component renders", () => {
    const firstDiv = document.querySelector(".middle-calendar");
    expect(firstDiv.toBeInDocument);
  });
});
