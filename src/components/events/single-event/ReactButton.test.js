import React from "react";
import ReactButton from "./ReactButton.js";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

describe("Test ReactButton static properties", () => {
  let ReactButtonComponent;
  beforeEach(() => {
    ReactButtonComponent = render(<ReactButton />);
  });

  test("ReactButton component renders", () => {
    expect(ReactButtonComponent.getByText(/react/i));
  });
});
