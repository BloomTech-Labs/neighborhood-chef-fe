import React from "react";
import RecentCard from "./RecentCard.js";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../../utilities/reducers";
import thunk from "redux-thunk";

import "@testing-library/jest-dom/extend-expect";

const store = createStore(rootReducer, applyMiddleware(thunk));

const testData = {
  name: "test name",
  date_created: new Date(2222222222222),
  photo: "",
  title: "summer BBQ",
  date: new Date(2223333333333),
  status: "Not Going",
};

describe("Test recentcard properties", () => {
  let RecentCardComponent;
  beforeEach(() => {
    RecentCardComponent = render(
      <Provider store={store}>
        <BrowserRouter>
          <RecentCard {...testData} />
        </BrowserRouter>
      </Provider>
    );
  });

  test("RecentCard component renders", () => {
    expect(RecentCardComponent.getByText(/summer BBQ/i));
  });
});
