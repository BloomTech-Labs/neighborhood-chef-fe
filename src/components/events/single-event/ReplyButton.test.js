import React from "react";
import ReplyButton from "./ReplyButton.js";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

describe("Test ReplyButton static properties", () => {
  let ReplyButtonComponent;
  beforeEach(() => {
    ReplyButtonComponent = render(<ReplyButton />);
  });

  test("ReplyButton component renders", () => {
    expect(ReplyButtonComponent.getByText(/reply/i));
  });
});
