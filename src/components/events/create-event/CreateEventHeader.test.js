import React from "react";
import CreateEventHeader from "./CreateEventHeader.js";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

const mockStore = configureStore([]);

describe("Test CreateEventHeader component", () => {
  let CreateEventHeaderComponent;
  let store;

  beforeEach(() => {
    store = mockStore({});
    CreateEventHeaderComponent = render(
      <Provider store={store}>
        <CreateEventHeader />
      </Provider>
    );
  });

  test("CreateEventHeader renders", () => {
    expect(CreateEventHeaderComponent.getByText(/Create/i));
  });
});
