import React from "react";
import Settings from "./Settings";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

describe("Test settings static properties", () => {
  let SettingsComponent;
  beforeEach(() => {
    SettingsComponent = render(
      <BrowserRouter>
        <Settings />
      </BrowserRouter>
    );
  });
  test.only("Settings contains phrase 'settings component'", () => {
    expect(SettingsComponent.getByText(/settings component/i));
  });
});
