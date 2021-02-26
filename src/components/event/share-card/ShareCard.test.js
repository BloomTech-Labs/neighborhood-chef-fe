import React from "react";
import ShareCard from "./ShareCard.js";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../../../utilities/reducers";
import thunk from "redux-thunk";

import "@testing-library/jest-dom/extend-expect";

const store = createStore(rootReducer, applyMiddleware(thunk));

describe("Test ShareCard static properties", () => {
  let ShareCardComponent;
  beforeEach(() => {
    ShareCardComponent = render(
      <Provider store={store}>
        <BrowserRouter>
          <ShareCard />
        </BrowserRouter>
      </Provider>
    );
  });

  test("ShareCard component renders", () => {
    expect(ShareCardComponent.getByText(/share/i));
  });
});
