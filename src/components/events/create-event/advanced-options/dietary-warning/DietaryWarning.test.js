import React from "react";
import DietaryWarning from "./DietaryWarning.js";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";

const dietWarning = {
  id: 1,
  title: "Gluten Free",
};

describe("Test DietaryWarning component", () => {
  let IngredientComponent;
  beforeEach(() => {
    IngredientComponent = render(
      <BrowserRouter>
        <DietaryWarning diet={dietWarning} />
      </BrowserRouter>
    );
  });

  test("dietary warning component renders with text from props", () => {
    expect(IngredientComponent).toBeDefined();
    expect(IngredientComponent.getByText(/Gluten Free/i));
  });
});
