import React from "react";
import AllergyWarning from "./AllergyWarning.js";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";

const allergy = {
  id: 1,
  name: "Shellfish",
};

describe("Test AllergyWarning component", () => {
  let IngredientComponent;
  beforeEach(() => {
    IngredientComponent = render(
      <BrowserRouter>
        <AllergyWarning allergy={allergy} />
      </BrowserRouter>
    );
  });

  test("ingredient component renders with text from props", () => {
    expect(IngredientComponent).toBeDefined();
    expect(IngredientComponent.getByText(/Shellfish/i));
  });
});
