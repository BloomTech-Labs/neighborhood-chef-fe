import React from "react";
import AboutUs from "./AboutUs";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

describe("Test AboutUs static properties", () => {
  let AboutComponent;
  beforeEach(() => {
    AboutComponent = render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );
  });
  test.only("AboutUs contains text paragraph", () => {
    expect(AboutComponent.getByText(/Welcome to Neighborhood Chef/i));
  });
});
