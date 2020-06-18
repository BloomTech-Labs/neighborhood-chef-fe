import React from "react";
import Ingredient from "./Ingredient.js";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";

const ingredient = [{
  description: "Milk 2 gallons"
}];

describe("Test Ingredient component", () => {
  let IngredientComponent;
  beforeEach(() => {
    IngredientComponent = render(
      <BrowserRouter>
        <Ingredient key={0} index={0} item={ingredient[0]} />
      </BrowserRouter>
    );
  });

  console.log(IngredientComponent)

  test("ingredient component renders with text from props", () => {
    expect(IngredientComponent).toBeDefined();
    expect(IngredientComponent.getByText(/Milk 2 gallons/));
  });
});
