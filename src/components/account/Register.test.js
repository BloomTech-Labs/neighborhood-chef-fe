import React from "react";
import Register from "./Register.js";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Test register static properties", () => {
  let RegisterComponent;
  beforeEach(() => {
    RegisterComponent = render(<Register />);
  });

  test("Register component renders", () => {
    expect(RegisterComponent.getByText(/First Name/i));
  });
});
