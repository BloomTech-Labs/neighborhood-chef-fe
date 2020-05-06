import React from "react";
import Notifications from "./Notifications";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

describe("Test notifications static properties", () => {
  let NotificationsComponent;
  beforeEach(() => {
    NotificationsComponent = render(
      <BrowserRouter>
        <Notifications />
      </BrowserRouter>
    );
  });
  test.only("Notifications contains phrase 'notifications component'", () => {
    expect(NotificationsComponent.getByText(/notifications component/i));
  });
});
