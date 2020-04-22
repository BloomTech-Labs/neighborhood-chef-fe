import React from "react";
import Sidebar from "./Sidebar.js";
import renderer from "react-test-renderer";

it("Register component renders", () => {
  const SidebarComponent = renderer.create(<Sidebar />).toJSON();
  expect(SidebarComponent).toMatchSnapshot();
});
