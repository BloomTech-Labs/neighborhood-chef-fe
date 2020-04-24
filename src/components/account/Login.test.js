import React from "react";
import Login from "./Login.js";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Test login static properties", () => {
  let LoginComponent;
  beforeEach(() => {
    LoginComponent = render(<Login />);
  });

  test("Login component renders", () => {
    expect(LoginComponent.getByText(/Login Component/i));
  });
});
