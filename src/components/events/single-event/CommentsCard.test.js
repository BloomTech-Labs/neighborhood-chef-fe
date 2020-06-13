import React from "react";
import CommentsCard from "./CommentsCard.js";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../../../utilities/reducers";
import thunk from "redux-thunk";

import "@testing-library/jest-dom/extend-expect";

const store = createStore(rootReducer, applyMiddleware(thunk));

describe("Test CommentsCard static properties", () => {
  let CommentsCardComponent;
  beforeEach(() => {
    CommentsCardComponent = render(
      <Provider store={store}>
        <BrowserRouter>
          <CommentsCard />
        </BrowserRouter>
      </Provider>
    );
  });

  test("CommentsCard component renders", () => {
    expect(CommentsCardComponent.getByText(/comments/i));
  });
});
