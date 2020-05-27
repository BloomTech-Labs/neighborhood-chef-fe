import React from "react";
import FormContainer from "./FormContainer.js";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";

const mockStore = configureStore([]);

describe("Test FormContainer component", () => {
  let store;
  let FormContainerComponent;

  const initialState = {
    title: "",
    description: "",
    date: "",
    startTime: "00:00:00",
    endTime: "15:00:00",
    category_id: "",
    address: " ",
    latitude: "",
    longitude: "",
  };

  beforeEach(() => {
    store = mockStore({});

    FormContainerComponent = render(
      <Router>
        <Provider store={store}>
          <FormContainer initialState={initialState} />
        </Provider>
      </Router>
    );
  });

  test("FormContainer component renders", () => {
    expect(FormContainerComponent).toBeDefined();
  });
});
