import React from "react";
import AddDietaryRestrictions from "./AddDietaryRestrictions.js";
import { Formik } from "formik";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Test AddDietaryRestrictions component", () => {
  let AddDietaryRestrictionsComponent;
  beforeEach(() => {
    AddDietaryRestrictionsComponent = render(
      <Formik>
        <AddDietaryRestrictions values={{ dietaryRestrictions: [] }} />
      </Formik>
    );
  });

  test("AddDietaryRestrictions component renders", () => {
    expect(AddDietaryRestrictionsComponent.getByText(/Dietary Restrictions/i));
  });
});
