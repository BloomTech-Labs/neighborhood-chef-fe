import React from "react";
import SidebarButton from "./SidebarButton";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import houseDoor from "@iconify/icons-bi/house-door";
import { BrowserRouter } from "react-router-dom";

const testButton = {
  active: false,
  link: "settings",
  text: "Settings",
  icon: houseDoor,
};

describe("Test sidebar button static properties", () => {
  let SidebarButtonComponent;
  beforeEach(() => {
    SidebarButtonComponent = render(
      <BrowserRouter>
        <SidebarButton {...testButton} />
      </BrowserRouter>
    );
  });
  test.only("test button contains text 'Settings'", () => {
    expect(SidebarButtonComponent.getByText(/settings/i));
  });
});
