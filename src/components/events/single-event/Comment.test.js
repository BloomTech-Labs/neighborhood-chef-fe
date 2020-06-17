import React from "react";
import Comment from "./Comment.js";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

const testComment = {
  id: 1,
  user_id: 2,
  event_id: 1,
  parent: -1,
  root: 1,
  date_created: 1593217800000,
  description: "I'm so excited for this, you have no idea!",
};

describe("Test Comment static properties", () => {
  let CommentComponent;
  beforeEach(() => {
    sessionStorage.setItem("user", JSON.stringify({ id: 1 }));
    CommentComponent = render(<Comment eventId={1} {...testComment} />);
  });

  test("Comment component renders description passed via props", () => {
    expect(CommentComponent.getByText(testComment.description));
  });
});
