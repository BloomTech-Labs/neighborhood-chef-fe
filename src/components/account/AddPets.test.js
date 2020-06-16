import React from "react";
import AddPets from "./AddPets.js";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Test AddPets component", () => {
  let AddPetsComponent;
  beforeEach(() => {
    AddPetsComponent = render(<AddPets values={{ pets: [] }} />);
  });

  test("AddPets component renders", () => {
    expect(AddPetsComponent.getByText(/Pets/i));
  });
});
