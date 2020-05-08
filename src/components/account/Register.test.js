import React from "react";
import Register from "./Register.js";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../../utilities/reducers";
import thunk from "redux-thunk";

import "@testing-library/jest-dom/extend-expect";

const store = createStore(rootReducer, applyMiddleware(thunk));

describe("Test register static properties", () => {
  let RegisterComponent;
  beforeEach(() => {
    RegisterComponent = render(
      <Provider store={store}>
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      </Provider>
    );
  });

  test("Register component renders", () => {
    expect(RegisterComponent.getByText(/Sign up below/i));
  });
});
