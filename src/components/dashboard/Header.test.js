import React from "react";
import Header from "./Header";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../../utilities/reducers";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

describe("Test sidebar static properties", () => {
  let HeaderComponent;
  beforeEach(() => {
    HeaderComponent = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
  });
  test("Header renders", () => {
    const firstDiv = document.querySelector(".header-container");
    expect(firstDiv.toBeInDocument);
  });
});
