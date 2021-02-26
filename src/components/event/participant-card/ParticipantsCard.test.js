import React from "react";
import ParticipantsCard from "./ParticipantsCard.js";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../../../utilities/reducers";
import thunk from "redux-thunk";

import "@testing-library/jest-dom/extend-expect";

const store = createStore(rootReducer, applyMiddleware(thunk));

describe("Test ParticipantsCard static properties", () => {
  let ParticipantsCardComponent;
  beforeEach(() => {
    ParticipantsCardComponent = render(
      <Provider store={store}>
        <BrowserRouter>
          <ParticipantsCard />
        </BrowserRouter>
      </Provider>
    );
  });

  test("ParticipantsCard component renders", () => {
    expect(ParticipantsCardComponent.getByText(/attending/i));
  });
});
