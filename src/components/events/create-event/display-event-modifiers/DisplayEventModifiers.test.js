import React from "react";
import DisplayEventModifiers from "./DisplayEventModifiers.js";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Test DisplayEventModifiers component", () => {
  let DisplayEventModifiersComponent;

  beforeEach(() => {
    DisplayEventModifiersComponent = render(
      <DisplayEventModifiers
        modifiers={[
          {
            id: 1,
            title: "18+",
            icon: "bottle icon",
            active: false,
          },
        ]}
        hashtags={[{ id: 1, title: "#hashtag" }]}
        dietWarnings={[{ id: 1, diet: "Vegan Only" }]}
        allergenList={[]}
        ingredientList={[]}
      />
    );
  });

  test("DisplayEventModifiers component renders", () => {
    expect(DisplayEventModifiersComponent).toBeDefined();
    expect(DisplayEventModifiersComponent.getByText(/#hashtag/i));
    expect(DisplayEventModifiersComponent.getByText(/18+/i));
  });
});
