import React from "react";
import AddDietaryPreferences from "./AddDietaryPreferences.js";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Test AddDietaryPreferences component", () => {
  let AddDietaryPreferencesComponent;
  beforeEach(() => {
    AddDietaryPreferencesComponent = render(
      <AddDietaryPreferences values={{ dietaryPreferences: [] }} />
    );
  });

  test("AddDietaryPreferences component renders", () => {
    expect(AddDietaryPreferencesComponent.getByText(/Dietary Preferences/i));
  });
});
