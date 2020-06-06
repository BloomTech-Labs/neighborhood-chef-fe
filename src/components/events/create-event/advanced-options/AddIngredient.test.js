import React from "react";
import AddIngredient from "./AddIngredient.js";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";

const ingredientArray = [
  { id: 1, name: "Milk", quantity: 1, measurement: "Gallon" },
  { id: 2, title: "Butter", quantity: 2, measurement: "Tablespoons" },
];

describe("Test AddIngredient component", () => {
  let AddIngredientComponent;
  beforeEach(() => {
    AddIngredientComponent = render(
      <BrowserRouter>
        <AddIngredient ingredientList={ingredientArray} />
      </BrowserRouter>
    );
  });

  test("add ingredient component renders with text from props", () => {
    expect(AddIngredientComponent).toBeDefined();
    expect(
      AddIngredientComponent.getByText(
        /Request for guests to bring ingredients/i
      )
    );
    expect(AddIngredientComponent.getByText(/Milk/i));
    expect(AddIngredientComponent.getByText(/Tablespoons/i));
    expect(AddIngredientComponent.getByText(/Tablespoons/i));
  });
});
