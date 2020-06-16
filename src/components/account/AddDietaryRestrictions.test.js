import React from "react";
import AddDietaryRestrictions from "./AddDietaryRestrictions.js";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Test AddDietaryRestrictions component", () => {
  let AddDietaryRestrictionsComponent;
  beforeEach(() => {
    AddDietaryRestrictionsComponent = render(
      <AddDietaryRestrictions values={{ dietaryRestrictions: [] }} />
    );
  });

  test("AddDietaryRestrictions component renders", () => {
    expect(AddDietaryRestrictionsComponent.getByText(/Dietary Restrictions/i));
  });
});
