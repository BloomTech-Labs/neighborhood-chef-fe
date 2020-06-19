import React from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

describe("Test ResponsiveMenu component", () => {
  let ResponsiveMenuComponent;
  beforeEach(() => {
    ResponsiveMenuComponent = render(
      <BrowserRouter>
        <ResponsiveMenu />
      </BrowserRouter>
    );
  });
  test.only("ResponsiveMenu component renders", () => {
    expect(ResponsiveMenuComponent).toBeDefined();
  });
});
