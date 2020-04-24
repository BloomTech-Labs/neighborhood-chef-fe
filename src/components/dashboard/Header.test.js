import React from "react";
import Header from "./Header";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Test sidebar static properties", () => {
  let HeaderComponent;
  beforeEach(() => {
    HeaderComponent = render(<Header />);
  });
  test("Header contains text 'Neighborhood Chef'", () => {
    expect(HeaderComponent.getByText(/neighborhood chef/i));
  });
});
