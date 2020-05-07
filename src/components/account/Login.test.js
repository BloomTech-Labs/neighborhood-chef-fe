import React from "react";
import Login from "./Login.js";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

describe("Test login static properties", () => {
  let LoginComponent;
  beforeEach(() => {
    LoginComponent = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  });

  test("Login component renders", () => {
    expect(LoginComponent.getByText(/prepare to eat well/i));
  });
  test("Okta redirect button renders", () => {
    expect(LoginComponent.getByText(/login Securely with okta/i));
  });
});
