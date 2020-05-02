import React from "react";
import ViewEvents from "./ViewEvents.js";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

describe("Test view event static properties", () => {
  let ViewEventsComponent;
  beforeEach(() => {
    ViewEventsComponent = render(
      <BrowserRouter>
        <ViewEvents />
      </BrowserRouter>
    );
  });

  test("ViewEvents component renders", () => {
    expect(ViewEventsComponent.getByText(/ViewEvents Component/i));
  });
});
