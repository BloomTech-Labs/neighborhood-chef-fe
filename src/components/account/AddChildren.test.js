import React from "react";
import AddChildren from "./AddChildren.js";
import { Formik } from "formik";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Test AddChildren component", () => {
  let AddChildrenComponent;
  beforeEach(() => {
    AddChildrenComponent = render(
      <Formik>
        <AddChildren values={{ children: [] }} />
      </Formik>
    );
  });

  test("AddChildren component renders", () => {
    expect(AddChildrenComponent.getByText(/Children/i));
  });
});
