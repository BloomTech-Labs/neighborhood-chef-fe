import React from "react";
import Dashboard from "./Dashboard.js";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

describe("Test dashboard static properties", () => {
  beforeEach(() => {
    const DashboardComponent = render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
  });

  test("Dashboard component renders", () => {
    const secondDiv = document.querySelector(".component-main");
    expect(secondDiv.toBeInDocument);
  });
});
