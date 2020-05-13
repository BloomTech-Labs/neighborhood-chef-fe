import React from "react";
import Feed from "./Feed.js";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

describe("Test Feed static properties", () => {
  let FeedComponent;
  beforeEach(() => {
    FeedComponent = render(
      <BrowserRouter>
        <Feed />
      </BrowserRouter>
    );
  });

  test("Feed component renders", () => {
    expect(FeedComponent.getByText(/recent messages/i));
  });
});
