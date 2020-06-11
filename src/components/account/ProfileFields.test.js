import React from "react";
import { Formik } from "formik";
import ProfileFields from "./ProfileFields.js";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

const mockStore = configureStore([]);

describe("Test ProfileFields static properties", () => {
  let store;
  let ProfileFieldsComponent;

  beforeEach(() => {
    store = mockStore({});

    ProfileFieldsComponent = render(
      <Provider store={store}>
        <BrowserRouter>
          <Formik>
            <ProfileFields setFieldValue={() => {}} submitting={false} />
          </Formik>
        </BrowserRouter>
      </Provider>
    );
  });

  test("ProfileFields renders", () => {
    expect(ProfileFieldsComponent.getByText(/Submit/i));
  });
});
