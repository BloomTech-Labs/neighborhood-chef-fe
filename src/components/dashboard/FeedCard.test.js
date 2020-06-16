import React from "react";
import FeedCard from "./FeedCard.js";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../../utilities/reducers";
import thunk from "redux-thunk";

import "@testing-library/jest-dom/extend-expect";

const store = createStore(rootReducer, applyMiddleware(thunk));

const testData = {
  name: "Test name",
  photo: "",
  message: "test message",
  time_created: new Date(),
  likes: 1,
  comments_num: 2,
};

describe("Test feedcard properties", () => {
  let FeedCardComponent;
  sessionStorage.setItem("user", JSON.stringify({ id: 1 }));
  beforeEach(() => {
    FeedCardComponent = render(
      <Provider store={store}>
        <BrowserRouter>
          <FeedCard {...testData} />
        </BrowserRouter>
      </Provider>
    );
  });

  test("FeedCard component renders", () => {
    expect(FeedCardComponent.getByText(/test name/i));
  });
});
