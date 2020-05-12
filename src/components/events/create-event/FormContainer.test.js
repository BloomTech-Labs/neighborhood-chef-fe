import React from "react";
import FormContainer from "./FormContainer.js";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";

const mockStore = configureStore([]);

describe("Test FormContainer component", () => {
  let store;
  let FormContainerComponent;
  beforeEach(() => {
    store = mockStore({});

    FormContainerComponent = render(
      <Provider store={store}>
        <FormContainer />
      </Provider>
    );
  });

  test("FormContainer component renders", () => {
    expect(FormContainerComponent).toBeDefined();
  });
});
