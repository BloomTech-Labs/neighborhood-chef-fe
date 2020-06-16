import React from "react";
import AddChildren from "./AddChildren.js";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Test AddChildren component", () => {
  let AddChildrenComponent;
  beforeEach(() => {
    AddChildrenComponent = render(<AddChildren values={{ children: [] }} />);
  });

  test("AddChildren component renders", () => {
    expect(AddChildrenComponent.getByText(/Children/i));
  });
});
