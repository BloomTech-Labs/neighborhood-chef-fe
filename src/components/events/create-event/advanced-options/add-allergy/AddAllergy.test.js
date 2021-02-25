import React from "react";
import AddAllergy from "./AddAllergy.js";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";

const allergyArray = [
  { id: 1, name: "Shellfish" },
  { id: 2, name: "Peanuts" },
];

describe("Test AddAllergy component", () => {
  let AddAllergyComponent;
  beforeEach(() => {
    AddAllergyComponent = render(
      <BrowserRouter>
        <AddAllergy allergenList={allergyArray} />
      </BrowserRouter>
    );
  });

  test("add allergy component renders with text from props", () => {
    expect(AddAllergyComponent).toBeDefined();
    expect(AddAllergyComponent.getByText(/Add allergy/i));
    expect(AddAllergyComponent.getByText(/Shellfish/i));
    expect(AddAllergyComponent.getByText(/Peanuts/i));
  });
});
