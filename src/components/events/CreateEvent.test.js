import React from "react";
import CreateEvent from "./CreateEvent.js";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Test create event static properties", () => {
  let CreateEventComponent;
  beforeEach(() => {
    CreateEventComponent = render(<CreateEvent />);
  });

  test("CreateEvent component renders", () => {
    expect(CreateEventComponent.getByText(/CreateEvent Component/i));
  });
});
