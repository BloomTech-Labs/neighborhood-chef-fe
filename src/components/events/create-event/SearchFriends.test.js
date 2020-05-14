import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";

import SearchFriends from "./SearchFriends.js";

const event = {
  title: "BBQ",
  address: "123 ABC St.",
  date: new Date(),
  startTime: "6:00pm",
  endTime: "9:00pm",
};

const userList = [
  { id: 1, firstName: "Homer", lastName: "Simpon", email: "homer@gmail.com" },
  { id: 3, firstName: "Bart", lastName: "Simpson", email: "bart@gmail.com" },
];

const inviteList = [
  {
    id: 4,
    firstName: "Lisa",
    lastName: "Simpson",
    email: "list@gmail.com",
  },
  {
    id: 5,
    firstName: "Ralph",
    lastName: "Wiggum",
    email: "ralph@gmail.com",
  },
];

const mockStore = configureStore([]);

describe("Test SearchFriends component", () => {
  let SearchFriendsComponent;
  let store;

  beforeEach(() => {
    store = mockStore({
      userList: userList,
      inviteList: inviteList,
      event: event,
    });

    SearchFriendsComponent = render(
      <Router>
        <Provider store={store}>
          <SearchFriends filteredList={userList} />
        </Provider>
      </Router>
    );
  });

  test("SearchFriendsComponent renders", () => {
    expect(SearchFriendsComponent).toBeDefined();
    expect(SearchFriendsComponent.getByText(/Invite Neighbors/i));
  });
});
