import React from "react";
import UserEditModalContent from './UserEditModalContent'
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { theme } from "../styles";
import { ThemeProvider } from "@material-ui/core/styles";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import "@testing-library/jest-dom/extend-expect";

class StorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value;
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new StorageMock;
global.sessionStorage = new StorageMock;

const mockStore = configureStore([]);

describe("Test UserEditModal static properties", () => {
  let UserEditModal;
  beforeEach(() => {
      sessionStorage.setItem('user', JSON.stringify({
        address: "address",
        firstName: "firstName",
        lastName: "lastName",
        id: "id",
        gender: "gender"
      }));

      const store = mockStore({});

      UserEditModal = render(
        <Provider store={store}>
          <BrowserRouter>
              <ThemeProvider theme={theme}>
                  <UserEditModalContent />
              </ ThemeProvider>
          </BrowserRouter>
        </Provider>
      );
  });

    test("UserEditModal component renders", () => {
      console.log(sessionStorage.getItem('user'));
      console.log("here");
  
    expect(UserEditModal.getByText(/Change User Information/i));
  });

});


