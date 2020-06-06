import React from "react";
import AdvancedOptions from "./AdvancedOptions.js";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";

const allergenList = [{ id: 1, name: "Shellfish" }];
const dietWarnings = [{ id: 1, title: "Keto" }];
const ingredientList = [
  { id: 1, name: "Milk", quantity: 1, measurement: "Gallon" },
];

describe("Test AdvanedOptions component", () => {
  let AdvancedOptionsComponent;
  beforeEach(() => {
    AdvancedOptionsComponent = render(
      <BrowserRouter>
        <AdvancedOptions
          allergenList={allergenList}
          dietWarnings={dietWarnings}
          ingredientList={ingredientList}
        />
      </BrowserRouter>
    );
  });

  test("advanced options component renders with text from props", () => {
    expect(AdvancedOptionsComponent).toBeDefined();
    expect(AdvancedOptionsComponent.getByText(/Shellfish/i));
    expect(AdvancedOptionsComponent.getByText(/Keto/i));
    expect(AdvancedOptionsComponent.getByText(/Gallon/i));
  });
});
