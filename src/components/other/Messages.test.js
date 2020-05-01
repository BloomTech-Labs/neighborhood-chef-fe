import React from "react";
import Messages from "./Messages";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

describe("Test messages static properties", () => {
  let MessagesComponent;
  beforeEach(() => {
    MessagesComponent = render(
      <BrowserRouter>
        <Messages />
      </BrowserRouter>
    );
  });
  test.only("Messages contains phrase 'messages component'", () => {
    expect(MessagesComponent.getByText(/messages component/i));
  });
});
