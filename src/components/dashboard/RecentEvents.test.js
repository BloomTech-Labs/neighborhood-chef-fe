import React from "react";
import RecentEvents from "./RecentEvents";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

describe("Test recent events static properties", () => {
  let RecentEventsComponent;
  beforeEach(() => {
    RecentEventsComponent = render(
      <BrowserRouter>
        <RecentEvents />
      </BrowserRouter>
    );
  });

  test("RecentEvents component renders", () => {
    expect(RecentEventsComponent.getByText(/newest events/i));
  });
});
