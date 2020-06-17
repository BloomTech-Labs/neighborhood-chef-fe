import React from "react";
import AddIngredient from "./AddIngredient.js";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../../../../utilities/reducers/";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

import "@testing-library/jest-dom/extend-expect";

const ingredientArray = [
  { description: "Milk 1 gallon" },
  { description: "Butter 2 Tablespoons" },
];

describe("Test AddIngredient component", () => {
  let AddIngredientComponent;
  beforeEach(() => {
    AddIngredientComponent = render(
      <Provider store={store}>
        <BrowserRouter>
          <AddIngredient ingredientList={ingredientArray} />
        </BrowserRouter>
      </Provider>
    );
  });

  test("add ingredient component renders with text from props", () => {
    expect(AddIngredientComponent).toBeDefined();
    expect(
      AddIngredientComponent.getByText(
        /Request for guests to bring ingredients/i
      )
    );
    expect(AddIngredientComponent.getByText(/Milk 1 gallon/i));
  });
});
