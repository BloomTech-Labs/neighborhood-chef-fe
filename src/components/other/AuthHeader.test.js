import React from "react";
import AuthHeader from "./AuthHeader";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

describe("Test AuthHeader component", () => {
  let AuthHeaderComponent;
  beforeEach(() => {
    AuthHeaderComponent = render(
      <BrowserRouter>
        <AuthHeader />
      </BrowserRouter>
    );
  });
  test.only("AuthHeader component renders", () => {
    expect(AuthHeaderComponent.getByText(/Register/i));
    expect(AuthHeaderComponent.getByText(/Neighborhood Chef/i));
    expect(AuthHeaderComponent).toBeDefined();
  });
});
