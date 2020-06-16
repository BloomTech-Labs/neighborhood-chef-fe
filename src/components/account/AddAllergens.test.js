import React from "react";
import AddAllergens from "./AddAllergens.js";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Test AddAllergens component", () => {
  let AddAllergensComponent;
  beforeEach(() => {
    AddAllergensComponent = render(<AddAllergens values={{ allergens: [] }} />);
  });

  test("AddAllergens component renders", () => {
    expect(AddAllergensComponent.getByText(/Allergens/i));
  });
});
