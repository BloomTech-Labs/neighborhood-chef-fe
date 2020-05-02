import React from "react";
import Recipes from "./Recipes";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

describe("Test Recipes static properties", () => {
  let RecipesComponent;
  beforeEach(() => {
    RecipesComponent = render(
      <BrowserRouter>
        <Recipes />
      </BrowserRouter>
    );
  });
  test.only("Recipes contains phrase 'recipes component'", () => {
    expect(RecipesComponent.getByText(/recipes component/i));
  });
});
