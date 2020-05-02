import React from "react";
import Sidebar from "./Sidebar";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

describe("Test sidebar static properties", () => {
  let SidebarComponent;
  beforeEach(() => {
    SidebarComponent = render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
  });
  test.only("Sidebar contains text 'calendar'", () => {
    expect(SidebarComponent.getByText(/calendar/i));
  });
});
