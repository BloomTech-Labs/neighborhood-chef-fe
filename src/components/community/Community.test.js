import React from "react";
import Community from "./Community";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

describe("Test Community static properties", () => {
  let CommunityComponent;
  beforeEach(() => {
    CommunityComponent = render(
      <BrowserRouter>
        <Community />
      </BrowserRouter>
    );
  });
  test.only("Messages contains phrase 'bon appetit'", () => {
    expect(CommunityComponent.getByText(/Bon appétit!/i));
  });
});
