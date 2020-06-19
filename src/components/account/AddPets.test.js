import React from "react";
import AddPets from "./AddPets.js";
import { Formik } from "formik";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Test AddPets component", () => {
  let AddPetsComponent;
  beforeEach(() => {
    AddPetsComponent = render(
      <Formik>
        <AddPets values={{ pets: [] }} />
      </Formik>
    );
  });

  test("AddPets component renders", () => {
    expect(AddPetsComponent.getByText(/Pets/i));
  });
});
