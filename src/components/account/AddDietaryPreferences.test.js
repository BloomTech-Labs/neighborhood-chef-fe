import React from "react";
import AddDietaryPreferences from "./AddDietaryPreferences.js";
import { Formik } from "formik";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Test AddDietaryPreferences component", () => {
  let AddDietaryPreferencesComponent;
  beforeEach(() => {
    AddDietaryPreferencesComponent = render(
      <Formik>
        <AddDietaryPreferences values={{ dietaryPreferences: [] }} />
      </Formik>
    );
  });

  test("AddDietaryPreferences component renders", () => {
    expect(AddDietaryPreferencesComponent.getByText(/Dietary Preferences/i));
  });
});
