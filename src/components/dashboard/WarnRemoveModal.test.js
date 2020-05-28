import React from "react";
import WarnRemoveModal from "./WarnRemoveModal";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../../utilities/reducers";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

describe("Test WarnRemoveModal static properties", () => {
  let WarnRemoveModalComponent;
  beforeEach(() => {
    WarnRemoveModalComponent = render(
      <Provider store={store}>
        <BrowserRouter>
          <WarnRemoveModal />
        </BrowserRouter>
      </Provider>
    );
  });

  test("WarnRemoveModal component renders", () => {
    expect(WarnRemoveModalComponent.getByText(/remove event/i));
  });
});
