import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";

import UserList from "./UserList.js";

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

const event = {
  id: 1,
  user_id: 1,
  title: "BBQ",
};

const mockStore = configureStore([]);

describe("Test UserList component", () => {
  let UserListComponent;
  let store;

  beforeEach(() => {
    store = mockStore({
      inviteList: inviteList,
    });

    UserListComponent = render(
      <Provider store={store}>
        <UserList filteredList={userList} event={event} />
      </Provider>
    );
  });

  test("SearchFriendsComponent renders", () => {
    expect(UserListComponent).toBeDefined();
    expect(UserListComponent.findAllByText(/Ralph/i));
  });
});
