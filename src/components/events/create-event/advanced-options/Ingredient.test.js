import React from "react";
import Ingredient from "./Ingredient.js";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";

const ingredient = {
  id: 1,
  quantity: 2,
  measurement: "Gallons",
  name: "Milk",
};

describe("Test Ingredient component", () => {
  let IngredientComponent;
  beforeEach(() => {
    IngredientComponent = render(
      <BrowserRouter>
        <Ingredient item={ingredient} />
      </BrowserRouter>
    );
  });

  test("ingredient component renders with text from props", () => {
    expect(IngredientComponent).toBeDefined();
    expect(IngredientComponent.getByText(/Milk/i));
    expect(IngredientComponent.getByText(/Gallons/i));
  });
});
