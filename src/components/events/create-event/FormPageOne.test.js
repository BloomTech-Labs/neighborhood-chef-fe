import React from "react";
import FormPageOne from "./FormPageOne.js";
import { Formik } from "formik";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";

const values = {
  title: "BBQ",
  address: "123 ABC St.",
  description: "BBQ at my house!",
  date: "May, 20, 2020",
  startTime: "18:00:00",
  endTime: "21:00:00",
  category_id: 1,
};

const mockStore = configureStore([]);

const handleChange = jest.fn();

describe("Test FormPageOne component", () => {
  let store;
  let FormPageOneComponent;
  beforeEach(() => {
    store = mockStore({});

    FormPageOneComponent = render(
      <Provider store={store}>
        <Router>
          <Formik>
            <FormPageOne values={values} handleChange={handleChange} />
          </Formik>
        </Router>
      </Provider>
    );
  });

  test("FormPageOne component renders", () => {
    expect(FormPageOneComponent).toBeDefined();
  });
});
