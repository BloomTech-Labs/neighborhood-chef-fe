import React from "react";
import Emoji from "./Emoji";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Test emoji component", () => {
  let EmojiComponent;
  beforeEach(() => {
    EmojiComponent = render(<Emoji />);
  });
  test("emoji component is defined", () => {
    expect(EmojiComponent).toBeDefined();
  });
});
