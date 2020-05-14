import React from "react";
import CreateEvent from "./CreateEvent.js";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

const mockStore = configureStore([]);

describe("Test create event static properties", () => {
  let store;
  let CreateEventComponent;

  beforeEach(() => {
    store = mockStore({});

    CreateEventComponent = render(
      <Provider store={store}>
        <BrowserRouter>
          <CreateEvent />
        </BrowserRouter>
      </Provider>
    );
  });

  test("CreateEvent component renders", () => {
    expect(CreateEventComponent).toBeDefined();
  });
});
