import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

describe("Test App static properties", () => {
  let AppComponent;
  beforeEach(() => {
    AppComponent = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  test("renders neighborhood chef", () => {
    expect(AppComponent.getByText(/neighborhood chef/i));
  });
});
