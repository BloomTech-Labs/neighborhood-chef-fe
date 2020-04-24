import React from "react";
import Dashboard from "./Dashboard.js";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Test dashboard static properties", () => {
  let DashboardComponent;
  beforeEach(() => {
    DashboardComponent = render(<Dashboard />);
  });

  test("Dashboard component renders", () => {
    expect(DashboardComponent.getByText(/Dashboard Component/i));
  });
});
